import Image, { type StaticImageData } from "next/image";
import { Timer, Utensils } from "lucide-react";

type TRecipeCard = {
  img: StaticImageData;
  title: string;
  timer: number;
  category: string;
};

export const RecipeCard = ({ img, timer, title, category }: TRecipeCard) => {
  return (
    <div className="max-h-[434px] max-w-[400px] space-y-6 rounded-[30px] bg-gradient-to-b from-[#E7F9FD]/0 to-[#E7F9FD]/100 px-4 pb-8 pt-4">
      <div className="h-[250px] w-[368px] fill-[#C4C4C4]">
        <Image src={img} alt={title} className="rounded-[20px]" />
      </div>
      <h3 className="text-2xl font-semibold leading-7">{title}</h3>
      <div className="flex items-center space-x-4">
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
