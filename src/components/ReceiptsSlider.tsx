import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rana Mukerjee",
    company: "AI RESEARCH LAB",
    quote:
      "The end-to-end ML pipeline and model deployment we built together went from paper to production in weeks. Clean code, solid experiments, and real impact on our metrics.",
    avatar: "/placeholder.svg",
    initials: "RM",
  },
  {
    name: "Toai Choudhury",
    company: "NEURAL SYSTEMS",
    quote:
      "From data pipeline design to training and inference APIs—everything was well-architected and documented. One of the best AI engineering collaborations we've had.",
    avatar: "/placeholder.svg",
    initials: "TC",
  },
  {
    name: "Akshath A. Mathur",
    company: "DEEP LEARNING STUDIO",
    quote:
      "The vision-language model we worked on exceeded our benchmarks. Great mix of research rigor and production mindset. Would definitely work together again.",
    avatar: "/placeholder.svg",
    initials: "AM",
  },
  {
    name: "Vivian Richard",
    company: "AUTONOMOUS AI",
    quote:
      "Our agentic system went live on schedule thanks to clear design and iterative experimentation. The research-to-product flow was seamless and professional.",
    avatar: "/placeholder.svg",
    initials: "VR",
  },
  {
    name: "Florimond Gueniat",
    company: "IOT & SMART MICROGRIDS",
    quote:
      "Collaborating on the Digital Twin paper for predictive maintenance and affordability optimization was a great experience. The AI–IoT integration and cost-aware analytics we developed together really showed how scalable these architectures can be for next-generation energy systems.",
    avatar: "/placeholder.svg",
    initials: "FG",
  },
];

const ReceiptsSlider = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto max-w-[700px] px-4"
    >
      {/* Paperclip decoration */}
      <div className="paperclip pointer-events-none absolute -right-2 top-8 z-10 h-0 w-0" />

      <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
        Testimonials:
      </p>
      <h2 className="mb-2 text-2xl font-bold uppercase tracking-tight text-foreground">
        I got the receipts
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-foreground/70">
        I focus on clear communication and delivery—from research and prototyping to production-ready systems. Don&apos;t take my word for it; here&apos;s what collaborators and teams I&apos;ve worked with have to say.
      </p>
      <p className="mb-6 text-[10px] uppercase tracking-wider text-foreground/50">
        Swipe or drag to see more
      </p>

      {/* Tape decoration – moveable carousel */}
      <div className="tape relative mx-auto max-w-[700px]">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            watchDrag: true,
            containScroll: "trimSnaps",
            dragThreshold: 5,
          }}
          className="w-full cursor-grab active:cursor-grabbing touch-pan-x"
        >
          <CarouselContent
            viewportClassName="cursor-grab active:cursor-grabbing touch-pan-x select-none overflow-hidden"
            className="-ml-2 touch-pan-x select-none md:-ml-4"
          >
            {testimonials.map((t, i) => (
              <CarouselItem
                key={t.name}
                className="basis-[85%] pl-2 md:basis-[72%] md:pl-4"
              >
                <div className="relative overflow-hidden rounded-sm border border-dashed border-card-foreground/20 bg-card px-5 py-4 shadow-sm">
                  {/* Receipt dashed bottom line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0 border-b-2 border-dashed border-card-foreground/15"
                    style={{ borderStyle: "none none dashed none" }}
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-2 border-card-foreground/10">
                        <AvatarImage src={t.avatar} alt={t.name} />
                        <AvatarFallback className="bg-muted text-xs font-bold text-card-foreground">
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wide text-card-foreground">
                          {t.name}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-card-foreground/50">
                          {t.company}
                        </p>
                      </div>
                    </div>
                    <p className="relative text-sm leading-relaxed text-card-foreground/80">
                      <span className="absolute -left-1 text-2xl font-serif leading-none text-card-foreground/25">
                        &ldquo;
                      </span>
                      <span className="pl-4">{t.quote}</span>
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-card-foreground/40">
                      Testimonial · We got the receipts
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 border-2 border-foreground/30 bg-card text-foreground hover:bg-card/90 md:-left-4" />
          <CarouselNext className="-right-2 border-2 border-foreground/30 bg-card text-foreground hover:bg-card/90 md:-right-4" />
        </Carousel>
      </div>
    </motion.section>
  );
};

export default ReceiptsSlider;
