import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export const Instruction = ({ content }: { content: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-6 checked:line-through">
          <Checkbox
            id="ingredient"
            className="size-6 rounded-full border-2 border-[#DBE2E5]"
          />
          <label
            htmlFor="ingredient"
            className="text-2xl font-semibold leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            1. Lorem ipsum dolor sit amet.
          </label>
        </div>
        {content}
      </div>
      <Separator className="border-black/10" />
    </div>
  );
};
