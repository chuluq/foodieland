import { recipes } from "@/config/recipes";
import { RecipeDetails } from "@/components/recipes/details";
import { MoreRecipes } from "@/components/recipes/more-recipes";
import { SubscriptionCard } from "@/components/subscription-card";

export default function RecipeDetailPage() {
  return (
    <>
      <RecipeDetails />
      <div className="px-20 py-40">
        <SubscriptionCard />
      </div>
      <div className="px-20">
        <MoreRecipes
          title="You may like these recipe too"
          recipes={recipes.slice(8, 12)}
        />
      </div>
    </>
  );
}
