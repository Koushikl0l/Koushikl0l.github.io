import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const images = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5];
const doubled = [...images, ...images];

const PortfolioCarousel = () => {
  return (
    <div className="mx-auto max-w-[700px] overflow-hidden py-4">
      <div className="flex animate-scroll-left gap-3" style={{ width: "max-content" }}>
        {doubled.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Portfolio work"
            className="h-40 w-32 shrink-0 rounded object-cover md:h-52 md:w-40"
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
