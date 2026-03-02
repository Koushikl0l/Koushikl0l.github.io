import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto max-w-[700px] bg-card corner-brackets tape paperclip p-8 pt-12"
    >
      {/* Dotted pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(hsl(0 0% 0%) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      <div className="relative z-[1]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-6xl font-bold uppercase leading-[0.95] tracking-tight text-card-foreground md:text-8xl">
              Koushik
              <br />
              Ahmed
            </h1>
          </div>
          <div className="relative shrink-0">
            <img
              src={profilePhoto}
              alt="Koushik Ahmed Kushal"
              className="h-32 w-32 rounded object-cover shadow-md md:h-40 md:w-40"
            />
            <div className="mt-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-card-foreground">
                Koushik Ahmed Kushal
              </p>
              <p className="text-[9px] uppercase tracking-wider text-card-foreground/60">
                CTO, SHUSTHO
              </p>
              <p className="text-[9px] uppercase tracking-wider text-card-foreground/60">
                AI Engineer / Researcher
              </p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-6 text-base leading-relaxed text-card-foreground/80">
          As an AI Engineer, I bridge research and production — building robust, scalable AI that ships fast and performs reliably at scale.
        </p>

      </div>
    </motion.div>
  );
};

export default HeroCard;
