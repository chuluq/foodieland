import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InstagramPost } from "@/components/instagram-post";
import { LearnMore } from "@/components/learn-more";
import { Recipes } from "@/components/recipes";
import { RecipeCarousel } from "@/components/recipes/carousel";
import { MoreRecipes } from "@/components/recipes/more-recipes";
import { SubscriptionCard } from "@/components/subscription-card";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <RecipeCarousel />
      <Categories />
      <Recipes />
      <LearnMore />
      <InstagramPost />
      <MoreRecipes />
      <SubscriptionCard />
      <Footer />
    </div>
  );
}
