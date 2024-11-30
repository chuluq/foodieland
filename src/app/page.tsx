import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FeaturedRecipe } from "@/components/recipe/featured";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <FeaturedRecipe />
      <Footer />
    </div>
  );
}
