import Image, { type StaticImageData } from "next/image";

import { Button } from "@/components/ui/button";
import breakfast from "@/assets/images/breakfast.png";
import chocolate from "@/assets/images/chocolate.png";
import dessert from "@/assets/images/dessert.png";
import lunch from "@/assets/images/lunch.png";
import meat from "@/assets/images/meat.png";
import vegan from "@/assets/images/vegan.png";

export const Categories = () => {
  return (
    <div className="space-y-20 px-20">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl">Categories</h1>
        <Button className="h-[60px] rounded-2xl bg-[#E7FAFE] px-5 font-semibold capitalize text-black shadow-sm hover:bg-[#E7FAFE]/90">
          View all categories
        </Button>
      </div>
      <div className="flex items-center gap-10">
        <Category title="breakfast" img={breakfast} />
        <Category title="vegan" img={vegan} />
        <Category title="meat" img={meat} />
        <Category title="dessert" img={dessert} />
        <Category title="lunch" img={lunch} />
        <Category title="chocolate" img={chocolate} />
      </div>
    </div>
  );
};

type CategoryProps = {
  title: string;
  img: StaticImageData;
};

const Category = ({ title, img }: CategoryProps) => {
  return (
    <div className="flex w-[180px] flex-col gap-y-[30px] rounded-2xl bg-gradient-to-b from-[#708246]/0 to-[#708246]/10 px-10 pb-[30px] shadow">
      <div className="size-[120px]">
        <Image src={img} alt={title} />
      </div>
      <p className="text-center text-lg font-semibold capitalize text-black">
        {title}
      </p>
    </div>
  );
};
