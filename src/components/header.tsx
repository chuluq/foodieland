import Link from "next/link";

import { landingConfig, socials } from "@/config/landing";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="flex flex-col">
      <nav className="flex items-center justify-between px-20 py-10">
        <Logo />
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
          {socials.map((soc, index) => (
            <a key={index} href={soc.url} target="_blank" className="size-5">
              <soc.icon />
            </a>
          ))}
        </div>
      </nav>
      <Separator className="border-black/10" />
    </header>
  );
};
