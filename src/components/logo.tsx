import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="font-lobster text-2xl text-black">
      Foodieland<span className="text-[#FF7426]">.</span>
    </Link>
  );
};
