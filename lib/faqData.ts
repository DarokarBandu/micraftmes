export interface FaqItem {
  id: string;
  category: "Platform" | "Features" | "Deployment" | "Pricing";
  question: string;
  answer: string;
}

export const faqList: FaqItem[] = [
  {
    id: "faq-1",
    category: "Platform",
    question: "What is Micraft MES?",
    answer: "Micraft MES is a Manufacturing Execution System that gives plant managers real-time visibility into shop floor operations — production status, machine utilization, downtime, quality inspections, and dispatch — replacing paper logs and spreadsheets with live data straight from the floor.",
  },
  {
    id: "faq-2",
    category: "Deployment",
    question: "How long does implementation take?",
    answer: "A single production line typically goes live in 2–4 weeks, with a step-by-step rollout rather than a big-bang cutover.",
  },
  {
    id: "faq-3",
    category: "Platform",
    question: "Is Micraft MES built for large enterprises or smaller manufacturers?",
    answer: "Micraft MES is built specifically for manufacturing SMEs — discrete manufacturers, job shops, and mid-size plants that need real shop-floor visibility without an enterprise MES budget or a multi-month rollout.",
  },
  {
    id: "faq-4",
    category: "Features",
    question: "What does Micraft MES actually track on the shop floor?",
    answer: "Work orders and production stages, machine utilization and idle/downtime codes, quality inspections and defect logs, and dispatch/packing verification — captured through operator terminals and machine IoT sync, and surfaced on live floor dashboards and shift-level KPI reports.",
  },
  {
    id: "faq-5",
    category: "Platform",
    question: "What industries does Micraft MES support?",
    answer: "Discrete and process manufacturing — automotive components, CNC machining, plastic injection molding, fabrication and sheet metal, electronics (EMS), and general SME manufacturing plants.",
  },
  {
    id: "faq-6",
    category: "Pricing",
    question: "How is Micraft MES priced?",
    answer: "Micraft MES is offered as a modular subscription — you pay for the shop-floor modules your plant actually needs, not a fixed enterprise license. Contact sales@micraft.co.in for a quote sized to your line count and modules.",
  },
  {
    id: "faq-7",
    category: "Platform",
    question: "Does Micraft MES replace our ERP?",
    answer: "No. Micraft MES handles what ERP wasn't built for — real-time shop-floor execution, machine-level data capture, and operator workflows — and is designed to run alongside your existing ERP, not replace it.",
  },
  {
    id: "faq-8",
    category: "Deployment",
    question: "How do we get started?",
    answer: "Request a live demo configured to your plant's parts and process — email sales@micraft.co.in, call +91 93568 65559, or use the \"Request Live Demo\" button on the site.",
  },
];
