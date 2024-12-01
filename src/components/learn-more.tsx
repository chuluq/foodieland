import Image from "next/image";

import { Button } from "@/components/ui/button";
import learnMore from "@/assets/images/learn-more.png";

export const LearnMore = () => {
  return (
    <div className="flex items-center gap-x-11 px-20 pb-[160px]">
      <div className="space-y-[72px]">
        <div className="space-y-6">
          <h1 className="max-w-xl text-5xl font-semibold leading-snug">
            Everyone can be a chef in their own kitchen
          </h1>
          <p className="max-w-[508px] leading-7 text-black/60">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <Button className="h-[60px] space-x-4 rounded-2xl px-9 font-semibold capitalize">
          Learn More
        </Button>
      </div>
      <Image src={learnMore} alt="learn-more" />
    </div>
  );
};
