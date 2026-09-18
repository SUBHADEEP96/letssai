import { industries, services } from "./site"
export type NavItem = {
  label: string
  href: string
  description?: string
  icon?: string
  children?: NavItem[]
}
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map(({ title, href, description, icon }) => ({
      label: title,
      href,
      description,
      icon,
    })),
  },
  {
    label: "Industries",
    href: "/industries",
    children: industries.map(({ title, href, useCase, icon }) => ({
      label: title,
      href,
      description: useCase,
      icon,
    })),
  },
  { label: "Why LetssAI", href: "/why-letssai" },
  { label: "Contact", href: "/contact" },
]
