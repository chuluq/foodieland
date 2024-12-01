import Link from "next/link";

import { landingConfig, socials } from "@/config/landing";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 px-20 pb-12 pt-40">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <Logo />
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
        <p className="text-lg font-medium text-black/60">
          &copy; 2024 Foodieland. Powered by{" "}
          <span className="text-[#FF7967]">LookQ</span>
        </p>
        <div className="flex items-center gap-10">
          {socials.map((soc, index) => (
            <a key={index} href={soc.url} target="_blank" className="size-5">
              <soc.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
