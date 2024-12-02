import { TimerIcon } from "lucide-react";

export const Timer = ({
  title,
  time,
}: {
  title: "Prep" | "Cook";
  time: string;
}) => {
  return (
    <div className="flex items-center gap-x-4">
      <TimerIcon />
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase">{title} Time</p>
        <p className="text-sm font-medium capitalize text-black/60">
          {time} Minutes
        </p>
      </div>
    </div>
  );
};
