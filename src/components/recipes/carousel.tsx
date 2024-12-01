import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FeaturedRecipe } from "@/components/recipes/featured";

export const RecipeCarousel = () => {
  return (
    <div className="px-10 pb-40 pt-10">
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
  );
};
