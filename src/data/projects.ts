import img2 from "@/assets/Projects/2.png";
import img3 from "@/assets/Projects/3.png";
import img5 from "@/assets/Projects/5.png";
import customerImg from "@/assets/Projects/Customer.png";
import anomalyImg from "@/assets/Projects/anomaly.png";
import ecImg from "@/assets/Projects/ec.png";
import lstmImg from "@/assets/Projects/lstm.png";
import pcaImg from "@/assets/Projects/pca.png";
import pfImg from "@/assets/Projects/pf.PNG";
import salesInsightImg from "@/assets/Projects/sales_insight.PNG";

export type ProjectItem = {
  id: string;
  image: string;
  title: string;
};

export const projects: ProjectItem[] = [
  { id: "faceoff", image: img2, title: "FaceOFF – Fake News Detection" },
  { id: "faceai", image: img3, title: "FaceAI – Emotion Recognition" },
  { id: "agriai", image: img5, title: "AgriAI – Leaf Disease Prediction" },
  { id: "customer", image: customerImg, title: "Customer Segmentation" },
  { id: "anomaly", image: anomalyImg, title: "Anomaly Detection" },
  { id: "ec", image: ecImg, title: "ECG Abnormalities Recognition" },
  { id: "lstm", image: lstmImg, title: "LSTM Text Generation" },
  { id: "pca", image: pcaImg, title: "PCA & Autoencoder" },
  { id: "pf", image: pfImg, title: "Personal Finance Dashboard" },
  { id: "sales-insight", image: salesInsightImg, title: "Sales Insight" },
];
