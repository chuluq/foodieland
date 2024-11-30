import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RecipeList } from "@/components/recipe/list";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <RecipeList />
      <Footer />
    </div>
  );
}
