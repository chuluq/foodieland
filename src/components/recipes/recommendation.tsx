import Image from "next/image";

import meatball from "@/assets/images/chicken-meatballs.png";

export const RecommendedRecipeCard = () => {
  return (
    <div className="flex gap-x-6">
      <div className="h-[120px] w-[180px] fill-[#C4C4C4]">
        <Image src={meatball} alt="meatball" className="rounded-[20px]" />
      </div>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold leading-7">
          Chicken Meatball with Creamy Chees...
        </h4>
        <p className="text-sm font-medium">By Andreas Paula</p>
      </div>
    </div>
  );
};
