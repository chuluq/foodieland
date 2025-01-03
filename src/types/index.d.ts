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

type TRecipeCategory =
  | "Snack"
  | "Fish"
  | "Breakfast"
  | "Healthy"
  | "Meat"
  | "Sweet"
  | "Noodles"
  | "Japanese"
  | "Western"
  | "Eastern"
  | "Seafood";

export type TRecipe = {
  img: string | StaticImageData;
  title: string;
  timer: number;
  category: TRecipeCategory;
  isFavorite?: boolean;
};
