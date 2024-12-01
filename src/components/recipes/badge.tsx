import React from "react";
import { type TRecipe } from "@/types";
import { Timer, Utensils } from "lucide-react";

type TRecipeBadge = Pick<TRecipe, "timer" | "category">;

export const RecipeBadge = ({ timer, category }: TRecipeBadge) => {
  return (
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
  );
};
