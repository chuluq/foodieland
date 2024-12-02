import { Separator } from "../ui/separator";

export const NutritionCard = ({
  nutrition,
  total,
}: {
  nutrition: string;
  total: string;
}) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <p className="text-lg font-medium capitalize text-black/60">
          {nutrition}
        </p>
        <p className="text-lg font-medium capitalize text-black">{total}</p>
      </div>
      <Separator className="border-black/10" />
    </div>
  );
};
