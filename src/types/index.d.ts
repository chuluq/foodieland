import { type StaticImageData } from "next/image";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
};

export type LandingConfig = {
  mainNav: MainNavItem[];
};

export type Social = {
  url: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
};

export enum RecipeCategory {
  Snack = "Snack",
  Fish = "Fish",
  Breakfast = "Breakfast",
  Healthy = "Healthy",
  Meat = "Meat",
  Sweet = "Sweet",
  Noodles = "Noodles",
}

export type Recipe = {
  img: StaticImageData;
  title: string;
  timer: number;
  category: RecipeCategory;
  isFavorite?: boolean;
};
