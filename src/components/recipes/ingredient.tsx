import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export const Ingredient = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center space-x-6 checked:line-through">
        <Checkbox
          id="ingredient"
          className="size-6 rounded-full border-2 border-[#DBE2E5]"
        />
        <label
          htmlFor="ingredient"
          className="text-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Lorem ipsum dolor sit amet.
        </label>
      </div>
      <Separator className="border-black/10" />
    </div>
  );
};
