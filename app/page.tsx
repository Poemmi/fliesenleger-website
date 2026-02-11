import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ReferencesPreview } from "@/components/sections/references-preview";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ReferencesPreview />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
