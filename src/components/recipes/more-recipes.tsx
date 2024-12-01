import Image from "next/image";
import { Timer, Utensils } from "lucide-react";

import { LoveCircle } from "@/components/love-circle";
import igPost from "@/assets/images/ig-post.png";

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
          <RecipePost />
          <RecipePost />
          <RecipePost />
          <RecipePost />
          <RecipePost />
          <RecipePost />
          <RecipePost />
          <RecipePost />
        </div>
      </div>
    </div>
  );
};

const RecipePost = () => {
  return (
    <div className="flex max-w-[290px] flex-col items-start">
      <div className="relative h-[200px] w-[290px]">
        <Image src={igPost} alt="post-1" className="rounded-[20px]" />
        <LoveCircle />
      </div>
      <p className="mb-6 mt-4 text-lg font-semibold leading-[26px]">
        Mixed Tropical Fruit Salad with Superfood Boosts
      </p>
      <div className="flex items-center space-x-6">
        <div className="flex items-center gap-x-[10px] rounded-2xl bg-transparent py-2">
          <Timer size={24} color="black" />
          <p className="text-sm font-medium capitalize text-black/60">
            30 Minutes
          </p>
        </div>
        <div className="flex items-center gap-x-[10px] rounded-2xl bg-transparent py-2">
          <Utensils size={24} color="black" />
          <p className="text-sm font-medium capitalize text-black/60">
            Healthy
          </p>
        </div>
      </div>
    </div>
  );
};
