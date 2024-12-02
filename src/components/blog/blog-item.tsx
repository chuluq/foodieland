import Image from "next/image";

import fruitSalad from "@/assets/images/fruit-salad.png";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

export const BlogItem = () => {
  return (
    <div className="flex space-x-10">
      <div className="h-[200px] w-[290px] fill-[#C4C4C4]">
        <Image
          src={fruitSalad}
          alt="blog-fruit-salad"
          className="rounded-[20px]"
        />
      </div>
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold capitalize">
            10 Vegetarian Recipes To Eat This Month
          </h3>
          <p className="max-w-[510px] leading-7 text-black/60">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim{" "}
          </p>
        </div>
        <div className="flex h-10 items-center space-x-6">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-bold">Shad CN</p>
          </div>
          <Separator orientation="vertical" className="border-black/10" />
          <p className="text-sm font-medium text-black/60">12 November 2021</p>
        </div>
      </div>
    </div>
  );
};
