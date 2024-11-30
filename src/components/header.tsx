import Link from "next/link"
import Facebook from "@/assets/facebook.svg"
import Instagram from "@/assets/instagram.svg"
import Twitter from "@/assets/x.svg"

import { landingConfig } from "@/config/landing"

export const Header = () => {
  return (
    <header className="px-20 py-10 flex justify-between items-center">
      <h1 className="font-lobster text-2xl text-black">Foodieland.</h1>
      <div className="flex items-center gap-[60px]">
        {landingConfig.mainNav.map((nav, index) => (
          <Link
            key={index}
            href={nav.href}
            className="font-medium text-base capitalize"
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
    </header>
  )
}
