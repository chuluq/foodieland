import { type TRecipe } from "@/types";

import burger from "@/assets/images/burger.png";
import meatballs from "@/assets/images/chicken-meatballs.png";
import pasta from "@/assets/images/chicken-pasta.png";
import chickenRice from "@/assets/images/chicken-rice.png";
import chickenSalad from "@/assets/images/chicken-salad.png";
import friedRice from "@/assets/images/fried-rice.png";
import fruitSalad from "@/assets/images/fruit-salad.png";
import pancake from "@/assets/images/pancake.png";
import ramen from "@/assets/images/ramen.png";
import salad from "@/assets/images/salad.png";
import salmon from "@/assets/images/salmon.png";
import sandwiches from "@/assets/images/sandwiches.png";
import strawberry from "@/assets/images/strawberry.png";
import taco from "@/assets/images/taco.png";
import wagyu from "@/assets/images/wagyu.png";
import wraps from "@/assets/images/wraps.png";

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
  {
    img: fruitSalad,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    timer: 30,
    category: "Healthy",
    isFavorite: true,
  },
  {
    img: wagyu,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    timer: 30,
    category: "Western",
    isFavorite: false,
  },
  {
    img: friedRice,
    title: "Healthy Japanese Fried Rice with Asparagus",
    timer: 30,
    category: "Healthy",
    isFavorite: true,
  },
  {
    img: taco,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    timer: 30,
    category: "Eastern",
    isFavorite: false,
  },
  {
    img: chickenSalad,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    timer: 30,
    category: "Healthy",
    isFavorite: true,
  },
  {
    img: sandwiches,
    title: "Barbeque Spicy Sandwiches with Chips",
    timer: 30,
    category: "Healthy",
    isFavorite: false,
  },
  {
    img: wraps,
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    timer: 30,
    category: "Seafood",
    isFavorite: false,
  },
  {
    img: ramen,
    title: "Chicken Ramen Soup with Mushroom ",
    timer: 30,
    category: "Japanese",
    isFavorite: true,
  },
];
