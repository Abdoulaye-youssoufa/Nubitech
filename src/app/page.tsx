import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { UseCases } from "@/components/sections/use-cases";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Blog } from "@/components/sections/blog";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <UseCases />
        <Features />
        <Testimonials />
        <Pricing />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
