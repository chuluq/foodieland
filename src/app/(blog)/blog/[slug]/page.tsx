import { recipes } from "@/config/recipes";
import { BlogDetails } from "@/components/blog/details";
import { MoreRecipes } from "@/components/recipes/more-recipes";
import { SubscriptionCard } from "@/components/subscription-card";

export default function BlogDetailPage() {
  return (
    <>
      <BlogDetails />
      <div className="px-20 pb-40">
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
