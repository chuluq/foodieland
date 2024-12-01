import Image from "next/image";
import { PlayCircle, Timer, Utensils } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import bakedChicken from "@/assets/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png";
import hotRecipe from "@/assets/images/hot-recipe.png";

export const FeaturedRecipe = () => {
  return (
    <div className="flex h-[640px] w-full">
      <div className="flex flex-col rounded-l-2xl bg-[#E7FAFE] p-[50px]">
        <div className="space-y-8">
          <div className="flex w-fit items-center gap-3 rounded-2xl bg-white px-5 py-[10px] drop-shadow-sm">
            <Image src={hotRecipe} alt="hot-recipe" width={24} height={24} />
            <p className="text-sm font-semibold capitalize text-black">
              Hot Recipes
            </p>
          </div>
          <div className="space-y-[30px]">
            <div className="space-y-6">
              <h1 className="text-[64px] font-semibold text-black">
                Spicy delicious chicken wings
              </h1>
              <p className="text-base leading-7 text-black/60">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{" "}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-[10px] rounded-2xl bg-black/5 px-4 py-2">
                <Timer size={24} color="black" />
                <p className="text-sm font-medium capitalize text-black/60">
                  30 Minutes
                </p>
              </div>
              <div className="flex items-center gap-[10px] rounded-2xl bg-black/5 px-4 py-2">
                <Utensils size={24} color="black" />
                <p className="text-sm font-medium capitalize text-black/60">
                  Chicken
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">John Smith</p>
              <p className="text-sm font-medium text-black/60">15 March 2022</p>
            </div>
          </div>
          <Button className="h-[60px] space-x-4 rounded-2xl px-9 font-semibold capitalize">
            View Recipes
            <PlayCircle size={24} />
          </Button>
        </div>
      </div>
      <Image src={bakedChicken} alt="baked-chicken" className="rounded-r-2xl" />
    </div>
  );
};
