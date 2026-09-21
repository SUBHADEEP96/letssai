"use client"

import { useEffect, useRef } from "react"
import { Color, Mesh, Program, Renderer, Triangle } from "ogl"

type Props = {
  backgroundColor?: string
  hoverIntensity?: number
  rotateOnHover?: boolean
}

const vertexShader = `
  attribute vec2 position;
  varying vec2 vUv;

  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec3 uColor;
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    vec2 p = (vUv - 0.5) * 2.0;
    p += uMouse * 0.035;

    float d = length(p);
    float angle = atan(p.y, p.x);
    float edgeWave = sin(angle * 5.0 + uTime * 0.85 + uMouse.x * 2.0) * 0.075;
    edgeWave += sin(d * 13.0 - uTime * 1.25 + uMouse.y) * 0.035;

    float orb = smoothstep(1.03, 0.70, d + edgeWave);
    float glow = smoothstep(1.22, 0.28, d) * 0.28;
    float flow = sin(p.x * 5.0 - p.y * 3.5 + uTime * 0.9) * 0.5 + 0.5;
    flow += (sin(d * 10.0 - uTime * 1.4) * 0.5 + 0.5) * 0.45;

    vec3 deepGreen = vec3(0.02, 0.26, 0.19);
    vec3 mint = min(uColor * 1.18, vec3(1.0));
    vec3 color = mix(deepGreen, mint, clamp(0.42 + flow * 0.36, 0.0, 1.0));
    color += vec3(0.20, 0.58, 0.42) * glow;

    float alpha = clamp(orb * 0.78 + glow * 0.34, 0.0, 0.88);
    if (alpha < 0.002) discard;
    gl_FragColor = vec4(color, alpha);
  }
`

export function OrbBackground({
  backgroundColor = "#5a9f7a",
  hoverIntensity = 2,
  rotateOnHover = true,
}: Props) {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = host.current
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    let frame = 0
    let visible = true
    let mouseX = 0
    let mouseY = 0

    try {
      const renderer = new Renderer({
        alpha: true,
        dpr: Math.min(devicePixelRatio, 1.5),
        premultipliedAlpha: false,
      })
      const gl = renderer.gl
      gl.clearColor(0, 0, 0, 0)
      gl.canvas.style.width = "100%"
      gl.canvas.style.height = "100%"
      gl.canvas.style.background = "transparent"
      element.appendChild(gl.canvas)

      const geometry = new Triangle(gl)
      const program = new Program(gl, {
        transparent: true,
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new Color(backgroundColor) },
          uMouse: { value: [0, 0] },
        },
      })
      const mesh = new Mesh(gl, { geometry, program })
      const pointerTarget = element.parentElement ?? element

      const resize = () => {
        renderer.setSize(element.clientWidth, element.clientHeight)
      }
      const pointer = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect()
        mouseX =
          ((event.clientX - bounds.left) / bounds.width - 0.5) * hoverIntensity
        mouseY =
          ((event.clientY - bounds.top) / bounds.height - 0.5) * hoverIntensity
      }
      const visibility = () => {
        visible = !document.hidden
      }
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
      })
      const resizeObserver = new ResizeObserver(resize)

      intersectionObserver.observe(element)
      resizeObserver.observe(element)
      pointerTarget.addEventListener("pointermove", pointer, { passive: true })
      document.addEventListener("visibilitychange", visibility)
      resize()

      const start = performance.now()
      const tick = (now: number) => {
        if (visible) {
          program.uniforms.uTime.value = (now - start) / 1000
          program.uniforms.uMouse.value = [
            mouseX,
            mouseY + (rotateOnHover ? mouseX * 0.25 : 0),
          ]
          renderer.render({ scene: mesh })
        }
        frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)

      return () => {
        cancelAnimationFrame(frame)
        intersectionObserver.disconnect()
        resizeObserver.disconnect()
        pointerTarget.removeEventListener("pointermove", pointer)
        document.removeEventListener("visibilitychange", visibility)
        gl.getExtension("WEBGL_lose_context")?.loseContext()
        gl.canvas.remove()
      }
    } catch {
      return
    }
  }, [backgroundColor, hoverIntensity, rotateOnHover])

  return (
    <div
      ref={host}
      aria-hidden
      className="orb-fallback pointer-events-none absolute top-1/2 left-1/2 z-[2] aspect-square w-[min(94vw,54rem)] -translate-x-1/2 -translate-y-1/2 opacity-90"
    />
  )
}
