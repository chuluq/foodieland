import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { RecommendedRecipeCard } from "@/components/recipes/recommendation";

import { BlogItem } from "./blog-item";

export const BlogList = () => {
  return (
    <div className="flex flex-col gap-y-20 px-20">
      <div className="flex flex-col items-center justify-center space-y-20 py-20">
        <div className="space-y-6">
          <h1 className="text-center text-[64px] font-semibold">
            Blog & Article
          </h1>
          <p className="text-center leading-7 text-black/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="flex h-20 w-[700px] items-center space-x-4 self-center rounded-3xl border border-black/10 bg-white py-[10px] pl-8 pr-[10px]">
          <Input
            placeholder="Search article, news or recipe..."
            className="border-none shadow-none placeholder:text-sm placeholder:text-black/40 focus-visible:ring-0"
          />
          <Button className="h-[60px] w-40 rounded-2xl font-semibold">
            Search
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_400px] items-start gap-x-10">
        <div className="flex flex-col space-y-8">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
        <div className="flex flex-col gap-y-8">
          <h2 className="text-[32px] font-semibold capitalize">
            Tasty Recipes
          </h2>
          <div className="flex flex-col gap-y-6">
            <RecommendedRecipeCard />
            <RecommendedRecipeCard />
            <RecommendedRecipeCard />
          </div>
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
