import Image from "next/image";
import { type TRecipe } from "@/types";

import { recipes } from "@/config/recipes";
import { LoveCircle } from "@/components/love-circle";
import { RecipeBadge } from "@/components/recipes/badge";

export const Recipes = () => {
  return (
    <div className="space-y-24 pb-[143px] pt-[183px]">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-5xl font-semibold">Simple and tasty recipes</h1>
        <p className="max-w-[706px] text-center leading-7">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 px-20">
        {recipes.slice(0, 9).map((recipe: TRecipe, index) => (
          <div
            key={index}
            className="max-h-[434px] max-w-[400px] space-y-6 rounded-[30px] bg-gradient-to-b from-[#E7F9FD]/0 to-[#E7F9FD]/100 px-4 pb-8 pt-4"
          >
            <div className="relative h-[250px] w-[368px] fill-[#C4C4C4]">
              <Image
                src={recipe.img}
                alt={recipe.title}
                className="rounded-[20px]"
                width={368}
                height={250}
              />
              {recipe.isFavorite ? <LoveCircle /> : null}
            </div>
            <h3 className="text-2xl font-semibold leading-7">{recipe.title}</h3>
            <RecipeBadge timer={recipe.timer} category={recipe.category} />
          </div>
        ))}
      </div>
    </div>
  );
};
