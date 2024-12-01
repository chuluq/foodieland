import Image from "next/image";
import { TRecipe } from "@/types";
import { Timer, Utensils } from "lucide-react";

import { recipes } from "@/config/recipes";
import { LoveCircle } from "@/components/love-circle";

export const MoreRecipes = () => {
  return (
    <div className="px-20 py-40">
      <div className="flex flex-col gap-y-20">
        <div className="flex items-center justify-between">
          <h1 className="max-w-xl text-5xl font-semibold leading-normal">
            Try this delicious recipe to make your day
          </h1>
          <p className="max-w-[620px] leading-7 text-black/60">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {recipes.slice(8, 18).map((recipe, index) => (
            <RecipePost key={index} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RecipePost = ({ img, title, timer, category, isFavorite }: TRecipe) => {
  return (
    <div className="flex max-w-[290px] flex-col items-start">
      <div className="relative h-[200px] w-[290px]">
        <Image src={img} alt={title} className="rounded-[20px]" />
        {isFavorite ? <LoveCircle /> : null}
      </div>
      <p className="mb-6 mt-4 text-lg font-semibold leading-[26px]">{title}</p>
      <div className="flex items-center space-x-6">
        <div className="flex items-center gap-x-[10px] rounded-2xl bg-transparent py-2">
          <Timer size={24} color="black" />
          <p className="text-sm font-medium capitalize text-black/60">
            {timer} Minutes
          </p>
        </div>
        <div className="flex items-center gap-x-[10px] rounded-2xl bg-transparent py-2">
          <Utensils size={24} color="black" />
          <p className="text-sm font-medium capitalize text-black/60">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};
