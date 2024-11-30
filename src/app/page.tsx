import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FeaturedRecipe } from "@/components/recipe/featured";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <div className="px-10 pt-10">
        <Carousel>
          <CarouselContent className="-ml-10">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-10">
                <FeaturedRecipe />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
