import { CallToAction } from "./sections/call-to-action"
import { CustomerStorySection } from "./sections/customer-story-section"
import { FeatureSection } from "./sections/feature-section"
import { HeroSection } from "./sections/hero-section"
import { SuportSection } from "./sections/support-section"

export const LandingPage = () => {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SuportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
}