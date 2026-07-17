import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MES & WIP Tracking for Metal Fabrication | Production Software",
  description: "Optimize your multi-stage fabrication shop with Micraft MES. Track WIP across cutting, bending, welding, and painting with real-time job-wise status and heat code compliance.",
  keywords: [
    'MES for metal fabrication',
    'WIP tracking for fabrication',
    'sheet metal manufacturing software',
    'fabrication workshop monitoring',
    'metal assembly tracking hub'
  ],
  alternates: {
    canonical: '/industries/fabrication-industry',
  }
};

export default function FabricationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
