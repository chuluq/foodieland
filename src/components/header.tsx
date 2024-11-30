import Link from "next/link";

import { landingConfig } from "@/config/landing";
import { Separator } from "@/components/ui/separator";
import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import Twitter from "@/assets/x.svg";

export const Header = () => {
  return (
    <header className="flex flex-col">
      <nav className="flex items-center justify-between px-20 py-10">
        <h1 className="font-lobster text-2xl text-black">Foodieland.</h1>
        <div className="flex items-center gap-[60px]">
          {landingConfig.mainNav.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className="text-base font-medium capitalize"
            >
              {nav.title}
            </Link>
          ))}
        </div>
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
      </nav>
      <Separator className="border-black/10" />
    </header>
  );
};
