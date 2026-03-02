import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { publications } from "@/data/publications";

const PublicationsSection = () => {
  return (
    <section className="mx-auto max-w-[700px] px-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
        Publications
      </p>
      <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-foreground">
        Publications
      </h2>

      <div className="border-t border-card-foreground/20 bg-card">
        {publications.map((pub, i) => (
          <motion.a
            key={pub.id}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            className="group flex border-t border-card-foreground/20 first:border-t-0"
          >
            {/* Left: image + arXiv logo & link */}
            <div
              className={`flex w-36 shrink-0 flex-col border-r border-card-foreground/20 md:w-44 ${pub.imageBg}`}
            >
              <div className="flex h-32 flex-1 items-center justify-center overflow-hidden md:h-36">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center gap-2 border-t border-card-foreground/15 py-2">
                <img
                  src="/arxiv-logo.svg"
                  alt="arXiv"
                  className="h-5 w-auto min-w-[3rem]"
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-card-foreground/80">
                  Read paper
                </span>
              </div>
            </div>

            {/* Right: text + arrow */}
            <div className="flex min-w-0 flex-1 items-center gap-5 py-5 pl-5 pr-4 transition-colors group-hover:bg-card-foreground/5">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-card-foreground/50">
                  arXiv PDF
                </p>
                <h3 className="mt-1 text-lg font-bold uppercase tracking-wide text-card-foreground md:text-xl">
                  {pub.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-card-foreground/70 line-clamp-3">
                  {pub.excerpt}
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-card-foreground/45">
                  Open paper
                </p>
              </div>

              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card-foreground text-card transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <ArrowUpRight className="h-6 w-6" strokeWidth={2} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;

