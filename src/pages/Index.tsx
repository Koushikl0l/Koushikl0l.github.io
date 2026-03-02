import Navbar from "@/components/Navbar";
import HeroCard from "@/components/HeroCard";
import SocialIcons from "@/components/SocialIcons";
import LinkCards from "@/components/LinkCards";
import PublicationsSection from "@/components/PublicationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReceiptsSlider from "@/components/ReceiptsSlider";
import ContactSection from "@/components/ContactSection";
import MoveableGif from "@/components/MoveableGif";

const Index = () => {
  return (
    <div className="grid-bg min-h-screen pb-20">
      <MoveableGif />
      <div className="relative z-10">
      <Navbar />

      <main className="px-4 pt-24">
        {/* Hero Profile Card */}
        <section className="mb-4">
          <HeroCard />
        </section>

        {/* Social Icons */}
        <section className="mb-4">
          <SocialIcons />
        </section>

        {/* Link Cards */}
        <section className="mb-16">
          <LinkCards />
        </section>

        {/* Publications */}
        <section className="mb-16">
          <PublicationsSection />
        </section>

        {/* Projects */}
        <section className="mb-16">
          <ProjectsSection />
        </section>

        {/* Receipts – horizontal testimonial slider */}
        <section className="mb-16">
          <ReceiptsSlider />
        </section>

        {/* Contact */}
        <section className="mb-16">
          <ContactSection />
        </section>
      </main>
      </div>
    </div>
  );
};

export default Index;
