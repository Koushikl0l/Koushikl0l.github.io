/**
 * Images from src/assets/Selected Research /
 * (Folder name has a trailing space.)
 */
// @ts-expect-error - Vite handles asset paths; path may contain space
import chestImg from "@/assets/Selected Research /chest.jpg";
// @ts-expect-error - Vite handles asset paths
import enhanceImg from "@/assets/Selected Research /enhance.png";
// @ts-expect-error - Vite handles asset paths
import screenshotImg from "@/assets/Selected Research /Screenshot 2025-08-12 at 11.23.45 PM.png";
// @ts-expect-error - Vite handles asset paths
import collageImg from "@/assets/Selected Research /collage.gif";

export type ResearchItem = {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  detail: string;
  extra?: string;
  link?: string;
  imageBg: string;
};

export const selectedResearch: ResearchItem[] = [
  {
    id: "chest",
    image: chestImg,
    title: "Chest X-Ray Analysis",
    excerpt:
      "Deep learning for chest radiograph interpretation and abnormality detection.",
    detail:
      "This work applies convolutional neural networks to chest X-ray images for automated screening and triage. The model is trained to identify common thoracic findings and support radiologists with consistent, fast first-pass analysis.",
    extra:
      "Techniques include transfer learning from large-scale natural image datasets and domain-specific augmentation. Evaluation on held-out clinical data shows strong agreement with expert readings on key conditions.",
    imageBg: "bg-amber-50",
  },
  {
    id: "enhance",
    image: enhanceImg,
    title: "Image Enhancement & Restoration",
    excerpt:
      "Learning-based image enhancement for low-light and degraded visual data.",
    detail:
      "Research on neural networks for image enhancement and restoration—addressing low-light noise, blur, and compression artifacts. The pipeline learns to recover detail and improve perceptual quality from suboptimal captures.",
    extra:
      "Framework is designed for efficiency to run on edge devices. Results are evaluated with both full-reference metrics and human studies where applicable.",
    imageBg: "bg-sky-50",
  },
  {
    id: "screenshot",
    image: screenshotImg,
    title: "Image Based - AQI Analysis",
    excerpt:
      "Multimodal deep learning that fuses atmospheric images with sensor data for robust AQI prediction, even when sensors are missing.",
    detail:
      "AQFusionNet combines ground-level atmospheric imagery and environmental sensor data in a dual-objective framework: it predicts the Air Quality Index and can estimate sensor values from images when data is incomplete. Lightweight CNN backbones (e.g. EfficientNet-B0) achieve 7.70 RMSE and 92.02% classification accuracy on 8,000+ samples from India and Nepal, with an 18.5% gain over unimodal baselines and efficiency suitable for edge deployment.",
    extra:
      "Designed for resource-limited regions; stays robust under partial sensor unavailability.",
    imageBg: "bg-violet-50",
  },
  {
    id: "collage",
    image: collageImg,
    title: "Visual Question Answering",
    excerpt:
      "Answering natural-language questions about images by combining vision and language models.",
    detail:
      "Visual Question Answering (VQA) combines computer vision and NLP to answer open-ended questions about images. The system takes an image and a question as input and returns an answer in natural language. This work uses attention to align question words with image regions and supports multiclass object recognition and activity understanding (e.g. “What is the person doing?”). Models are evaluated on standard benchmarks such as VQA and MS-COCO–style datasets.",
    extra:
      "VQA enables accessibility tools for the visually impaired, smarter image search, and interactive interfaces. Approaches range from co-attention and CNN–LSTM pipelines to transformer-based models (e.g. ViLT, BLIP) for both classification and generative answers.",
    imageBg: "bg-emerald-50",
  },
];
