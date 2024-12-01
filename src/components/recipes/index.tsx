import { RecipeCard } from "@/components/recipes/card";
import img1 from "@/assets/images/image 26.png";

export const Recipes = () => {
  return (
    <div className="space-y-24 pb-[143px] pt-[183px]">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-5xl font-semibold">Simple and tasty recipes</h1>
        <p className="max-w-[706px] text-center leading-7">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 px-20">
        <RecipeCard
          img={img1}
          timer={30}
          title="Big and Juicy Wagyu Beef Cheeseburger"
          category="Chicken"
        />
        <RecipeCard
          img={img1}
          timer={30}
          title="Big and Juicy Wagyu Beef Cheeseburger"
          category="Chicken"
        />
        <RecipeCard
          img={img1}
          timer={30}
          title="Big and Juicy Wagyu Beef Cheeseburger"
          category="Chicken"
        />
        <RecipeCard
          img={img1}
          timer={30}
          title="Big and Juicy Wagyu Beef Cheeseburger"
          category="Chicken"
        />
        <RecipeCard
          img={img1}
          timer={30}
          title="Big and Juicy Wagyu Beef Cheeseburger"
          category="Chicken"
        />
        <RecipeCard
          img={img1}
          timer={30}
          title="Big and Juicy Wagyu Beef Cheeseburger"
          category="Chicken"
        />
      </div>
    </div>
  );
};
