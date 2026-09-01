import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import FaqPage from "@/components/sections/InnerSection/FaqPage";
import FinalCTA from "@/components/sections/home1/FinalCTA";
import { faqList } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Micraft MES Software",
  description: "Find expert answers to common questions about Micraft MES implementation, shop floor visibility, downtime tracking, machine OEE, ERP integration, and pricing.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "Frequently Asked Questions | Micraft MES",
    description: "Get answers to all questions regarding Micraft MES software, shop floor data collection, machine monitoring, and ERP integration.",
    url: "https://www.micraftmes.com/faq",
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqList.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function Faq_Page() {
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqPage />
      <FinalCTA />
    </Layout>
  );
}
