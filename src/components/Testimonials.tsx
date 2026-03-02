import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const experiences = [
  {
    name: "Infosys",
    company: "ML Engineer — 2019",
    avatar: avatar1,
    text: "Developed a machine learning application that detects failing server logs (anomalies) on high dimensional representation.",
  },
  {
    name: "Upwork Inc.",
    company: "ML Engineer — 2020",
    avatar: avatar2,
    text: "Provided complete machine learning problem solutions with web applications. Designing and implementing scalable ML models to drive business growth.",
  },
  {
    name: "AgriAI",
    company: "Web App Designer",
    avatar: avatar3,
    text: "Built production web apps with a friendly approach, combining ML modeling with full-stack development.",
  },
  {
    name: "Duke of Edinburgh",
    company: "Bronze Award — 2019",
    avatar: avatar4,
    text: "Recipient of The Duke of Edinburgh's Award, a prestigious youth programme founded by Prince Philip, Duke of Edinburgh.",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[600px] px-4"
    >
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">
        Experience:
      </p>
      <h2 className="mb-2 text-2xl font-bold text-foreground">Work & Awards</h2>
      <p className="mb-8 text-sm leading-relaxed text-foreground/60">
        5+ years of hands-on machine learning experience with production deployments, research contributions, and open-source projects.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {experiences.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-lg bg-card p-5"
          >
            <div className="mb-3 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-card-foreground">{t.name}</p>
                <p className="text-[10px] uppercase tracking-wider text-card-foreground/50">
                  {t.company}
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-card-foreground/70">{t.text}</p>
            <p className="mt-3 text-[9px] uppercase tracking-wider text-card-foreground/40">
              Experience — Career Highlight
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
