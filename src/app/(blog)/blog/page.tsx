import { BlogList } from "@/components/blog";
import { SubscriptionCard } from "@/components/subscription-card";

export default function BlogPage() {
  return (
    <>
      <BlogList />
      <div className="px-20 pt-40">
        <SubscriptionCard />
      </div>
    </>
  );
}
