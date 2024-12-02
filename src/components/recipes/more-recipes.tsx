import Image from "next/image";
import { TRecipe } from "@/types";
import { Timer, Utensils } from "lucide-react";

import { cn } from "@/lib/utils";
import { LoveCircle } from "@/components/love-circle";

type TMoreRecipes = {
  title: string;
  description?: string;
  recipes: TRecipe[];
};

export const MoreRecipes = ({ title, description, recipes }: TMoreRecipes) => {
  return (
    <div className="flex flex-col gap-y-20">
      <div
        className={cn(
          "flex items-center",
          description ? "justify-between" : "justify-center"
        )}
      >
        <h1
          className={cn(
            "font-semibold leading-normal",
            description ? "max-w-xl text-left text-5xl" : "text-center text-4xl"
          )}
        >
          {title}
        </h1>
        {description ? (
          <p className="max-w-[620px] leading-7 text-black/60">{description}</p>
        ) : null}
      </div>
      <div className="grid grid-cols-4 gap-10">
        {recipes.map((recipe, index) => (
          <RecipePost key={index} {...recipe} />
        ))}
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
