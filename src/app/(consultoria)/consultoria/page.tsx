import { Hero } from "@/components/consultoria/home/Hero";
import { LogoMarquee } from "@/components/consultoria/home/LogoMarquee";
import { Origem } from "@/components/consultoria/home/Origem";
import { PainSlider } from "@/components/consultoria/home/PainSlider";
import { Method, Pillars } from "@/components/consultoria/home/Pillars";
import { BlogSoon, ContentCards } from "@/components/consultoria/home/Content";
import { FinalCta, Partners } from "@/components/consultoria/home/Partners";

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
      <Partners />
      <FinalCta />
    </>
  );
}
