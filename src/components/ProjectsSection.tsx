import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [popupStyle, setPopupStyle] = useState({ x: 0, y: 0 });
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hoveredId == null) return;
    const card = cardRefs.current[hoveredId];
    const popup = popupRef.current;
    if (!card || !popup) return;
    const update = () => {
      const rect = card.getBoundingClientRect();
      const popupRect = popup.getBoundingClientRect();
      const viewportW = window.innerWidth;
      let x = rect.left + rect.width / 2 - popupRect.width / 2;
      let y = rect.top - popupRect.height - 12;
      if (y < 12) y = rect.bottom + 12;
      if (x < 12) x = 12;
      if (x + popupRect.width > viewportW - 12) x = viewportW - popupRect.width - 12;
      setPopupStyle({ x, y });
    };
    update();
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(update);
    });
    return () => cancelAnimationFrame(t);
  }, [hoveredId]);

  return (
    <section className="mx-auto max-w-[700px] px-4">
      <p className="mb-0.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
        Projects
      </p>
      <h2 className="mb-2 text-2xl font-bold uppercase tracking-tight text-foreground">
        Projects
      </h2>

      <div className="border-t border-card-foreground/20 bg-card overflow-hidden">
        <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:gap-2.5 sm:p-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              ref={(el) => {
                cardRefs.current[project.id] = el;
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex min-h-[72px] cursor-pointer flex-col overflow-hidden rounded-md border border-card-foreground/15 bg-card-foreground/5 transition-colors hover:border-card-foreground/25 hover:bg-card-foreground/10 sm:min-h-[80px]"
            >
              <div className="flex flex-1 items-center justify-center overflow-hidden p-2">
                <img
                  src={project.image}
                  alt=""
                  className="h-10 w-full object-contain object-center opacity-90 transition-opacity group-hover:opacity-100 sm:h-12"
                  draggable={false}
                />
              </div>
              <p className="truncate px-2 pb-2 pt-0 text-center text-[10px] font-semibold uppercase tracking-wide text-card-foreground/80 sm:px-2.5 sm:pb-2.5 sm:text-xs">
                {project.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hoveredId && (() => {
          const project = projects.find((p) => p.id === hoveredId);
          if (!project) return null;
          return (
            <motion.div
              ref={popupRef}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="pointer-events-none fixed z-50 max-h-[85vh] w-[min(90vw,420px)] overflow-hidden rounded-lg border border-card-foreground/20 bg-card shadow-xl"
              style={{
                left: popupStyle.x,
                top: popupStyle.y,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-contain object-center"
                draggable={false}
              />
              <p className="truncate border-t border-card-foreground/15 px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-card-foreground/90">
                {project.title}
              </p>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
