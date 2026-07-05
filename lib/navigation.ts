import { industries, services } from "./site"
export type NavItem = {
  label: string
  href: string
  description?: string
  children?: NavItem[]
}
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map(({ title, href, description }) => ({
      label: title,
      href,
      description,
    })),
  },
  {
    label: "Industries",
    href: "/industries",
    children: industries.map(({ title, href, useCase }) => ({
      label: title,
      href,
      description: useCase,
    })),
  },
  { label: "Why LetssAI", href: "/why-letssai" },
  { label: "Contact", href: "/contact" },
]
