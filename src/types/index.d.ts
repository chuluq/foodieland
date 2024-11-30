export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    facebook: string
    instagram: string
    twitter: string
  }
}

export type LandingConfig = {
  mainNav: MainNavItem[]
}
