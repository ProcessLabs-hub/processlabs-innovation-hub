import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/content/landing";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-lab pt-16">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <p className="mb-6 text-sm font-medium uppercase tracking-wide text-text-muted">
            {heroContent.eyebrow}
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary md:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {heroContent.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group text-base"
            >
              {heroContent.primaryCta}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="link"
              onClick={() =>
                document
                  .getElementById("methodology")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
