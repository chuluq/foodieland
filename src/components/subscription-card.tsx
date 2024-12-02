import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SubscriptionCard = () => {
  return (
    <div className="flex flex-col gap-y-16 rounded-[60px] bg-[#E7F9FD] bg-[url('../assets/images/subscribe-bg-1.png'),_url('../assets/images/subscribe-bg-2.png')] bg-[position:left_bottom,_right_bottom] bg-no-repeat py-20">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-5xl font-semibold text-black">
          Deliciousness to your inbox
        </h1>
        <p className="max-w-[620px] text-center leading-7 text-black/60">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="flex h-20 w-[480px] items-center space-x-4 self-center rounded-3xl bg-white py-[10px] pl-8 pr-[10px]">
        <Input
          placeholder="Your email address..."
          className="border-none shadow-none placeholder:text-sm focus-visible:ring-0"
        />
        <Button className="h-[60px] w-40 rounded-2xl font-semibold">
          Subscribe
        </Button>
      </div>
    </div>
  );
};
