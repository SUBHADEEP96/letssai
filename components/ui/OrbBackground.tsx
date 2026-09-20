'use client'
import {useEffect,useRef} from 'react'
import {Renderer,Program,Mesh,Triangle,Color} from 'ogl'
type Props={backgroundColor?:string;hoverIntensity?:number;rotateOnHover?:boolean}
export function OrbBackground({backgroundColor='#5a9f7a',hoverIntensity=2,rotateOnHover=true}:Props){
 const host=useRef<HTMLDivElement>(null)
 useEffect(()=>{const el=host.current;if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches)return
  let renderer:Renderer|undefined,frame=0,visible=true,mouseX=0,mouseY=0
  try{renderer=new Renderer({alpha:true,dpr:Math.min(devicePixelRatio,1.5)});const gl=renderer.gl;gl.canvas.style.width='100%';gl.canvas.style.height='100%';el.appendChild(gl.canvas)
   const geometry=new Triangle(gl);const program=new Program(gl,{transparent:true,vertex:`attribute vec2 position;varying vec2 vUv;void main(){vUv=position*.5+.5;gl_Position=vec4(position,0.,1.);}`,fragment:`precision highp float;uniform float uTime;uniform vec3 uColor;uniform vec2 uMouse;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*2.;float d=length(p);float a=atan(p.y,p.x);float wave=sin(a*5.+uTime*0.7+uMouse.x*2.)*.055+sin(d*12.-uTime)*.025;float orb=smoothstep(1.,.72,d+wave);float glow=smoothstep(1.35,.25,d)*.38;vec3 c=uColor*(.72+sin(a*3.+uTime*.35)*.18)+vec3(.15,.32,.24)*glow;gl_FragColor=vec4(c,orb*.72+glow*.35);}`,uniforms:{uTime:{value:0},uColor:{value:new Color(backgroundColor)},uMouse:{value:[0,0]}}});const mesh=new Mesh(gl,{geometry,program})
   const resize=()=>{renderer!.setSize(el.clientWidth,el.clientHeight)};const pointer=(e:PointerEvent)=>{const r=el.getBoundingClientRect();mouseX=((e.clientX-r.left)/r.width-.5)*hoverIntensity;mouseY=((e.clientY-r.top)/r.height-.5)*hoverIntensity};const visibility=()=>{visible=!document.hidden};const observer=new IntersectionObserver(([x])=>{visible=x.isIntersecting});observer.observe(el);addEventListener('resize',resize);addEventListener('pointermove',pointer,{passive:true});document.addEventListener('visibilitychange',visibility);resize();const start=performance.now();const tick=(now:number)=>{if(visible){program.uniforms.uTime.value=(now-start)/1000;program.uniforms.uMouse.value=[mouseX,mouseY+(rotateOnHover?mouseX*.25:0)];renderer!.render({scene:mesh})}frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick)
   return()=>{cancelAnimationFrame(frame);observer.disconnect();removeEventListener('resize',resize);removeEventListener('pointermove',pointer);document.removeEventListener('visibilitychange',visibility);gl.getExtension('WEBGL_lose_context')?.loseContext();gl.canvas.remove()}
  }catch{return}
 },[backgroundColor,hoverIntensity,rotateOnHover])
 return <div ref={host} aria-hidden className="orb-fallback pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[min(110vw,58rem)] -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-screen"/>
}
