import { recipes } from "@/config/recipes";
import { Categories } from "@/components/categories";
import { InstagramPost } from "@/components/instagram-post";
import { LearnMore } from "@/components/learn-more";
import { Recipes } from "@/components/recipes";
import { RecipeCarousel } from "@/components/recipes/carousel";
import { MoreRecipes } from "@/components/recipes/more-recipes";
import { SubscriptionCard } from "@/components/subscription-card";

export default function Home() {
  return (
    <>
      <RecipeCarousel />
      <Categories />
      <Recipes />
      <LearnMore />
      <InstagramPost />
      <div className="px-20 pt-40">
        <MoreRecipes
          title="Try this delicious recipe to make your day"
          description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
        minim"
          recipes={recipes.slice(8, 18)}
        />
      </div>
      <div className="px-20 pt-40">
        <SubscriptionCard />
      </div>
    </>
  );
}
