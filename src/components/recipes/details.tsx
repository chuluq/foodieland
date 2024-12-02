import Image from "next/image";
import { PrinterIcon, ShareIcon, UtensilsIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { NutritionCard } from "@/components/recipes/nutrition-card";
import { Timer } from "@/components/recipes/timer";
import meatball from "@/assets/images/chicken-meatballs.png";
import instruction from "@/assets/images/instruction.png";

import { Ingredient } from "./ingredient";
import { Instruction } from "./instruction";

export const RecipeDetails = () => {
  return (
    <div className="px-20">
      <div className="py-20">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-12">
            <h1 className="text-[64px] font-semibold capitalize">
              Health Japanese Fried Rice
            </h1>
            <div className="flex h-[50px] items-center gap-x-8">
              <div className="flex items-center gap-x-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">John Smith</p>
                  <p className="text-sm font-medium text-black/60">
                    15 March 2022
                  </p>
                </div>
              </div>
              <Separator orientation="vertical" className="border-black/10" />
              <Timer title="Prep" time="15" />
              <Separator orientation="vertical" className="border-black/10" />
              <Timer title="Cook" time="15" />
              <Separator orientation="vertical" className="border-black/10" />
              <div className="flex items-center gap-x-[10px]">
                <UtensilsIcon />
                <p className="text-sm font-medium capitalize text-black/60">
                  Chicken
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex flex-col items-center gap-y-4">
              <div className="flex size-20 items-center justify-center rounded-full bg-[#E7FAFE]">
                <PrinterIcon />
              </div>
              <p className="text-xs font-medium uppercase">Print</p>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <div className="flex size-20 items-center justify-center rounded-full bg-[#E7FAFE]">
                <ShareIcon />
              </div>
              <p className="text-xs font-medium uppercase">Share</p>
            </div>
          </div>
        </div>
        <div className="mb-20 mt-16 flex items-center gap-x-10">
          <div className="h-[600px] flex-1">
            <iframe
              src="https://www.youtube.com/embed/9OquUp6x5IU?si=UVpx0X9NZ5mbuW9r"
              className="size-full rounded-[30px]"
            ></iframe>
          </div>
          <div className="flex h-[600px] max-w-[400px] flex-col gap-y-6 rounded-[30px] bg-[#E7FAFE] p-8">
            <h3 className="text-2xl font-semibold">Nutrition Information</h3>
            <div className="flex flex-col gap-y-4">
              <NutritionCard nutrition="Calories" total="219.9 kcal" />
              <NutritionCard nutrition="total fat" total="10.7 g" />
              <NutritionCard nutrition="protein" total="7.9 g" />
              <NutritionCard nutrition="carbohydrate" total="22.3 g" />
              <NutritionCard nutrition="cholesterol" total="37.4 mg" />
            </div>
            <p className="mt-auto leading-7 text-black/60">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
        <p className="leading-7 text-black/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="grid grid-cols-[1fr_400px] gap-x-10">
        <div className="flex flex-col gap-y-[88px]">
          <div className="flex flex-col gap-y-7">
            <h2 className="text-4xl font-semibold">Ingredients</h2>
            <div className="space-y-16">
              <div className="flex flex-col gap-y-8">
                <h3 className="text-2xl font-semibold">For main dish</h3>
                <div className="space-y-8">
                  <Ingredient />
                  <Ingredient />
                  <Ingredient />
                  <Ingredient />
                  <Ingredient />
                </div>
              </div>
              <div className="flex flex-col gap-y-8">
                <h3 className="text-2xl font-semibold">For the sauce</h3>
                <div className="space-y-8">
                  <Ingredient />
                  <Ingredient />
                  <Ingredient />
                  <Ingredient />
                  <Ingredient />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <h2 className="text-4xl font-semibold capitalize">Directions</h2>
            <div className="space-y-12">
              <Instruction
                content={
                  <div className="flex flex-col gap-y-12 pl-12">
                    <p className="text-black/60">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                    <Image
                      src={instruction}
                      alt="instruction"
                      className="h-auto w-full rounded-[20px]"
                    />
                    <p className="text-black/60">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                }
              />
              <Instruction
                content={
                  <p className="pl-12 text-black/60">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                }
              />
              <Instruction
                content={
                  <p className="pl-12 text-black/60">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <h2 className="text-[32px] font-semibold capitalize">Other Recipe</h2>
          <div className="flex flex-col gap-y-6">
            <RecommendedRecipeCard />
            <RecommendedRecipeCard />
            <RecommendedRecipeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const RecommendedRecipeCard = () => {
  return (
    <div className="flex gap-x-6">
      <Image
        src={meatball}
        alt="meatball"
        className="rounded-[20px] fill-[#C4C4C4]"
      />
      <div className="space-y-4">
        <h4 className="text-xl font-semibold leading-7">
          Chicken Meatball with Creamy Chees...
        </h4>
        <p className="text-sm font-medium">By Andreas Paula</p>
      </div>
    </div>
  );
};
