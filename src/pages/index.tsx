import { CustomerStorySection } from "@/components/customer-story-section";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SuportSection } from "@/components/SupportSection";

export default function Home() {
  return (
   <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SuportSection />
        <CustomerStorySection />
      </article>
   </>
  );
}