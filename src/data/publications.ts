import iotImg from "@/assets/Publications/IOT.png";
import aqiImg from "@/assets/Publications/AQI.png";

export type PublicationItem = {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  url: string;
  imageBg: string;
};

export const publications: PublicationItem[] = [
  {
    id: "microgrid-digital-twin",
    image: iotImg,
    title:
      "AI-Enhanced IoT Systems for Predictive Maintenance and Affordability Optimization in Smart Microgrids: A Digital Twin Approach",
    excerpt:
      "A digital-twin framework that combines real-time IoT monitoring with AI-driven predictive maintenance and affordability optimization for resilient microgrids.",
    url: "https://arxiv.org/pdf/2511.12175",
    imageBg: "bg-amber-50",
  },
  {
    id: "aqfusionnet",
    image: aqiImg,
    title:
      "AQFusionNet: Robust Multimodal Deep Learning for Air Quality Index Prediction through Atmospheric Imagery and Environmental Sensor Integration",
    excerpt:
      "A lightweight multimodal model that fuses atmospheric images with environmental sensors for robust AQI prediction, designed to stay reliable under partial sensor availability.",
    url: "https://arxiv.org/pdf/2509.00353",
    imageBg: "bg-sky-50",
  },
];

