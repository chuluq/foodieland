import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LearnMore } from "@/components/learn-more";
import { Recipes } from "@/components/recipes";
import { RecipeCarousel } from "@/components/recipes/carousel";
import { SubscriptionCard } from "@/components/subscription-card";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <RecipeCarousel />
      <Categories />
      <Recipes />
      <LearnMore />
      <SubscriptionCard />
      <Footer />
    </div>
  );
}
