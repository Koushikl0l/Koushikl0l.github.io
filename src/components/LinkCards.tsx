import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { selectedResearch, type ResearchItem } from "@/data/selectedResearch";

const LinkCards = () => {
  const [openItem, setOpenItem] = useState<ResearchItem | null>(null);

  return (
    <div className="mx-auto max-w-[700px] px-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
        Research
      </p>
      <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-foreground">
        Selected Work
      </h2>
      <div className="border-t border-card-foreground/20 bg-card">
        {selectedResearch.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
            className="group flex border-t border-card-foreground/20 first:border-t-0"
          >
            {/* Left: image */}
            <div
              className={`flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden border-r border-card-foreground/20 md:h-44 md:w-44 ${item.imageBg}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain object-center"
              />
            </div>
            {/* Right: excerpt + arrow */}
            <div className="flex min-w-0 flex-1 items-center gap-5 py-5 pl-5 pr-4 transition-colors group-hover:bg-card-foreground/5">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-card-foreground/50">
                  Research
                </p>
                <h3 className="mt-1 text-lg font-bold uppercase tracking-wide text-card-foreground md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-card-foreground/70 line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpenItem(item)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card-foreground text-card transition-transform hover:bg-card-foreground/90 group-hover:translate-x-0.5"
                aria-label={`View details: ${item.title}`}
              >
                <ArrowRight className="h-6 w-6" strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail popup */}
      <Dialog open={!!openItem} onOpenChange={() => setOpenItem(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-card bg-card p-6 text-card-foreground sm:max-w-[640px]">
          {openItem && (
            <>
              <DialogHeader>
                <DialogTitle className="pr-8 text-left text-xl font-bold uppercase tracking-tight">
                  {openItem.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-5">
                <div className="min-h-[240px] overflow-hidden rounded-md border border-card-foreground/15">
                  <img
                    src={openItem.image}
                    alt={openItem.title}
                    className="h-auto w-full min-h-[240px] object-cover object-center"
                  />
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-card-foreground/90">
                    {openItem.detail}
                  </p>
                  {openItem.extra && (
                    <p className="text-card-foreground/70">
                      {openItem.extra}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LinkCards;
