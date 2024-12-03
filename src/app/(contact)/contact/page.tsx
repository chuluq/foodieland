import { recipes } from "@/config/recipes";
import { ContactUs } from "@/components/contact-us";
import { MoreRecipes } from "@/components/recipes/more-recipes";
import { SubscriptionCard } from "@/components/subscription-card";

export default function ContactPage() {
  return (
    <>
      <ContactUs />
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
