import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SubscriptionCard = () => {
  return (
    <div className="px-20">
      <div className="bg-[#E7F9FD] bg-[url('../assets/images/subscribe-bg-1.png'),_url('../assets/images/subscribe-bg-2.png')] bg-[position:left_bottom,_right_bottom] bg-no-repeat flex flex-col gap-y-16 rounded-[60px] py-20">
        <div className="flex flex-col items-center gap-y-6">
          <h1 className="text-5xl font-semibold text-black">
            Deliciousness to your inbox
          </h1>
          <p className="leading-7 text-center text-black/60 max-w-[620px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="bg-white self-center space-x-4 flex items-center rounded-3xl w-[480px] h-20 py-[10px] pr-[10px] pl-8">
          <Input
            placeholder="Your email address..."
            className="border-none focus-visible:ring-0 shadow-none placeholder:text-sm"
          />
          <Button className="w-40 h-[60px] rounded-2xl font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
