import Image from "next/image";

import { socials } from "@/config/landing";
import blog from "@/assets/images/blog.png";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

export const BlogDetails = () => {
  return (
    <div className="px-20 pb-[132px] pt-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-[64px] font-semibold">
          Full Guide to Becoming a Professional Chef
        </h1>
        <div className="mb-12 mt-8 flex h-10 items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-bold">Shad CN</p>
          </div>
          <Separator
            orientation="vertical"
            className="ml-[61px] mr-6 border-black/10"
          />
          <p className="text-sm font-medium text-black/60">15 March 2022</p>
        </div>
        <p className="max-w-screen-lg text-center leading-7 text-black/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
      </div>
      <div className="min-h-[600px] w-full pb-20 pt-16">
        <Image src={blog} alt="blog" className="w-full rounded-[30px]" />
      </div>
      <div className="flex gap-x-12 px-[70px]">
        {/* article */}
        <div className="space-y-6">
          <>
            <h3 className="text-2xl font-semibold">
              How did you start out in the food industry?
            </h3>
            <p className="leading-7 text-black/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ad debitis rerum voluptate ratione atque velit ullam, qui dolorem
              blanditiis deserunt libero minima neque illo maxime exercitationem
              adipisci voluptatum! Porro dignissimos at ut nobis placeat in
              distinctio perspiciatis non maxime veritatis, est corrupti beatae
              cumque fugit! Consequatur hic officiis esse!
            </p>
          </>
          <>
            <h3 className="text-2xl font-semibold">
              How did you start out in the food industry?
            </h3>
            <p className="leading-7 text-black/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ad debitis rerum voluptate ratione atque velit ullam, qui dolorem
              blanditiis deserunt libero minima neque illo maxime exercitationem
              adipisci voluptatum! Porro dignissimos at ut nobis placeat in
              distinctio perspiciatis non maxime veritatis, est corrupti beatae
              cumque fugit! Consequatur hic officiis esse!
            </p>
          </>
          <>
            <h3 className="text-2xl font-semibold">
              How did you start out in the food industry?
            </h3>
            <p className="leading-7 text-black/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ad debitis rerum voluptate ratione atque velit ullam, qui dolorem
              blanditiis deserunt libero minima neque illo maxime exercitationem
              adipisci voluptatum! Porro dignissimos at ut nobis placeat in
              distinctio perspiciatis non maxime veritatis, est corrupti beatae
              cumque fugit! Consequatur hic officiis esse!
            </p>
          </>
        </div>
        <div className="ml-auto flex min-w-32 flex-col items-center gap-y-8">
          <p className="text-sm font-semibold uppercase">SHARE THIS ON:</p>
          <div className="flex flex-col gap-y-12">
            {socials.map((soc, index) => (
              <a
                key={index}
                href={soc.url}
                target="_blank"
                className="size-[22px]"
              >
                <soc.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
