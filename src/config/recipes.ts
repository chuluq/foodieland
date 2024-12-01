import { type TRecipe } from "@/types";

import burger from "@/assets/images/burger.png";
import meatballs from "@/assets/images/chicken-meatballs.png";
import pasta from "@/assets/images/chicken-pasta.png";
import chickenRice from "@/assets/images/chicken-rice.png";
import pancake from "@/assets/images/pancake.png";
import salad from "@/assets/images/salad.png";
import salmon from "@/assets/images/salmon.png";
import strawberry from "@/assets/images/strawberry.png";

export const recipes: TRecipe[] = [
  {
    img: burger,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    timer: 30,
    category: "Snack",
    isFavorite: true,
  },
  {
    img: salmon,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    timer: 30,
    category: "Fish",
    isFavorite: false,
  },
  {
    img: strawberry,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    timer: 30,
    category: "Breakfast",
    isFavorite: false,
  },
  {
    img: salad,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    timer: 30,
    category: "Healthy",
    isFavorite: true,
  },
  {
    img: meatballs,
    title: "Chicken Meatballs with Cream Cheese",
    timer: 30,
    category: "Meat",
    isFavorite: false,
  },
  {
    img: pancake,
    title: "Fruity Pancake with Orange & Blueberry",
    timer: 30,
    category: "Sweet",
    isFavorite: true,
  },
  {
    img: chickenRice,
    title: "The Best Easy One Pot Chicken and Rice",
    timer: 30,
    category: "Snack",
    isFavorite: false,
  },
  {
    img: pasta,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    timer: 30,
    category: "Noodles",
    isFavorite: false,
  },
];
