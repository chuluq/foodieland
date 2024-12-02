import { type LandingConfig, type Social } from "@/types";

import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import Twitter from "@/assets/x.svg";

export const landingConfig: LandingConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Recipes",
      href: "/#recipes",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "About us",
      href: "/#about",
    },
  ],
};

export const socials: Social[] = [
  {
    url: "https://facebook.com",
    icon: Facebook,
  },
  {
    url: "https://twitter.com",
    icon: Twitter,
  },
  {
    url: "https://instagram.com",
    icon: Instagram,
  },
];
