import { motion } from "framer-motion";
import { Github } from "lucide-react";
import scholarLogo from "@/assets/Google scholar /gs.png";

const GOOGLE_SCHOLAR_URL =
  "https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=3&gmla=AF9nlQs7InkJ0ygSrs70besjj-My8QlDTI4IrhNTo0F_ixCpogGXoOyQ6epc4V3cGHrReo8lLP_dUq_fMe3olw&user=EBJFctAAAAAJ";

const SocialIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mx-auto flex max-w-[700px] overflow-hidden border-b border-card-foreground/20"
    >
      <a
        href="https://github.com/Koushikl0l"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center border-r border-card-foreground/20 bg-card py-5 text-card-foreground transition-colors hover:bg-card-foreground/5"
        title="GitHub"
      >
        <Github className="h-6 w-6" strokeWidth={2} />
      </a>
      <a
        href="https://medium.com/@koushikkushal95"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center border-r border-card-foreground/20 bg-card py-5 text-card-foreground transition-colors hover:bg-card-foreground/5"
        title="Medium"
      >
        <img
          src="/medium-logo.svg"
          alt="Medium"
          className="h-5 w-auto max-w-[90px] object-contain"
        />
      </a>
      <a
        href={GOOGLE_SCHOLAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center bg-card py-5 text-card-foreground transition-colors hover:bg-card-foreground/5"
        title="Google Scholar"
      >
        <img
          src={scholarLogo}
          alt="Google Scholar"
          className="h-6 w-6 object-contain"
        />
      </a>
    </motion.div>
  );
};

export default SocialIcons;
