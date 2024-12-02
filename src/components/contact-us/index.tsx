import Image from "next/image";

import chef from "@/assets/images/chef.png";

import { ContactForm } from "./form";

export const ContactUs = () => {
  return (
    <div className="px-20 pt-[84px]">
      <div className="flex flex-col space-y-[72px]">
        <h1 className="text-center text-[64px] font-semibold">Contact us</h1>
        <div className="grid grid-cols-[400px_1fr] gap-x-10">
          <div className="h-[472px] w-[400px] rounded-[30px] bg-gradient-to-b from-[#E7F9FD]/0 to-[#E7F9FD]/100">
            <Image src={chef} alt="chef" className="rounded-[30px]" />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
