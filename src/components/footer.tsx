import Link from "next/link";
import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import Twitter from "@/assets/x.svg";

import { landingConfig } from "@/config/landing";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="px-20 pb-12 pt-40 flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="font-lobster text-2xl text-black">Foodieland.</h1>
          <p className="text-base leading-7 text-black/60">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center gap-[60px]">
          {landingConfig.mainNav.slice(1).map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className="text-base font-medium capitalize"
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <Separator className="border-black/10" />
      <div className="flex items-center justify-between">
        <p className="font-medium text-lg text-black/60">
          &copy; 2024 Foodieland. Powered by{" "}
          <span className="text-[#FF7967]">LookQ</span>
        </p>
        <div className="flex items-center gap-10">
          <div className="size-5">
            <Facebook />
          </div>
          <div className="size-5">
            <Twitter />
          </div>
          <div className="size-5">
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
};
