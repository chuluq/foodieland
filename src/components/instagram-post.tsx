import Image from "next/image";

import { Button } from "@/components/ui/button";
import post1 from "@/assets/images/Post-1.png";
import post2 from "@/assets/images/Post-2.png";
import post3 from "@/assets/images/Post-3.png";
import post4 from "@/assets/images/Post-4.png";
import Instagram from "@/assets/instagram.svg";

export const InstagramPost = () => {
  return (
    <div className="bg-gradient-to-b from-[#E7F9FD]/0 to-[#E7F9FD]/100 p-20">
      <div className="flex flex-col items-center justify-center gap-y-20">
        <div className="flex flex-col items-center gap-y-6">
          <h1 className="text-5xl font-semibold">
            Check out @foodieland on Instagram
          </h1>
          <p className="max-w-[840px] text-center leading-7 text-black/60">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-10">
          <Image src={post1} alt="post-1" />
          <Image src={post2} alt="post-2" />
          <Image src={post3} alt="post-3" />
          <Image src={post4} alt="post-4" />
        </div>
        <Button className="h-[60px] rounded-2xl px-8 font-semibold capitalize text-white shadow-sm">
          Visit our Instagram <Instagram className="fill-white" />
        </Button>
      </div>
    </div>
  );
};
