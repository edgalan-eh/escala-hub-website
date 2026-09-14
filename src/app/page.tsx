import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { Origem } from "@/components/home/Origem";
import { PainSlider } from "@/components/home/PainSlider";
import { Method, Pillars } from "@/components/home/Pillars";
import { BlogSoon, ContentCards } from "@/components/home/Content";
import { MetriHub } from "@/components/home/MetriHub";
import { FinalCta, Partners } from "@/components/home/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Origem />
      <PainSlider />
      <Pillars />
      <Method />
      <ContentCards />
      <BlogSoon />
      <MetriHub />
      <Partners />
      <FinalCta />
    </>
  );
}
