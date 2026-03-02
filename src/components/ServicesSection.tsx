import { motion } from "framer-motion";

const services = [
  "Machine Learning",
  "Data Science + Visualization",
  "Web App Development",
  "Research & Blogging",
];

const ServicesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[480px]"
    >
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
        Skills:
      </h2>
      <div className="space-y-2">
        {services.map((service) => (
          <div
            key={service}
            className="rounded bg-card/80 px-4 py-3 text-sm font-bold uppercase tracking-wide text-card-foreground"
          >
            {service}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesSection;
