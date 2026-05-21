import { CallToAction } from "@/components/call-to-action";
import { CustomerStorySection } from "@/components/customer-story-section";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SuportSection } from "@/components/support-section";

export default function Home() {
  return (
   <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SuportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
   </>
  );
}