import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";
import { getCampaigns, getSubscribersCount } from "@/src/lib/queries";

export const revalidate = 60; // ISR cache every minute

export default async function HomePage() {
  const [campaignsList, count] = await Promise.all([
    getCampaigns(),
    getSubscribersCount(),
  ]);

  return (
    <>
      <Hero />
      <VisualFeatures />
      <Features />
      <Pricing campaigns={campaignsList} />
      <CTA subscriberCount={count} />
      <Testimonial />
      <FAQs />
    </>
  );
}
