import KALogo from "@/components/KALogo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      <span
        className="flex items-center text-foreground transition-transform duration-200 hover:scale-105"
        aria-label="KA"
      >
        <KALogo className="h-7 w-auto md:h-8" />
      </span>
      <a
        href="#contact"
        className="rounded border border-foreground/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground/10"
      >
        Get in Touch
      </a>
    </nav>
  );
};

export default Navbar;
