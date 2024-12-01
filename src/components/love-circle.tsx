import React from "react";
import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";

export const LoveCircle = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "absolute right-4 top-4 flex size-12 items-center justify-center rounded-full bg-white p-3",
        className
      )}
      {...props}
    >
      <Heart color="#FF6363" className="fill-[#FF6363] drop-shadow" />
    </div>
  );
};
