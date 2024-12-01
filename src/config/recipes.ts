import { type Recipe, RecipeCategory } from "@/types";

import burger from "@/assets/images/burger.png";
import salmon from "@/assets/images/salmon.png";
import strawberry from "@/assets/images/strawberry.png";
import salad from "@/assets/images/salad.png";
import meatballs from "@/assets/images/chicken-meatballs.png";
import pancake from "@/assets/images/pancake.png";
import chickenRice from "@/assets/images/chicken-rice.png";
import pasta from "@/assets/images/chicken-pasta.png";

export const recipes: Recipe[] = [
  {
    img: burger,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    timer: 30,
    category: RecipeCategory["Snack"],
    isFavorite: true,
  },
  {
    img: salmon,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    timer: 30,
    category: RecipeCategory["Fish"],
    isFavorite: false,
  },
  {
    img: strawberry,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    timer: 30,
    category: RecipeCategory["Breakfast"],
    isFavorite: false,
  },
  {
    img: salad,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    timer: 30,
    category: RecipeCategory["Healthy"],
    isFavorite: true,
  },
  {
    img: meatballs,
    title: "Chicken Meatballs with Cream Cheese",
    timer: 30,
    category: RecipeCategory["Meat"],
    isFavorite: false,
  },
  {
    img: pancake,
    title: "Fruity Pancake with Orange & Blueberry",
    timer: 30,
    category: RecipeCategory["Sweet"],
    isFavorite: true,
  },
  {
    img: chickenRice,
    title: "The Best Easy One Pot Chicken and Rice",
    timer: 30,
    category: RecipeCategory["Snack"],
    isFavorite: false,
  },
  {
    img: pasta,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    timer: 30,
    category: RecipeCategory["Noodles"],
    isFavorite: false,
  },
];
