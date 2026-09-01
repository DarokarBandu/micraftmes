import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import LegalContentSection from "@/components/sections/InnerSection/LegalContentSection";

export const metadata = {
  alternates: {
    canonical: '/terms-of-use',
  },
  title: 'Terms of Use | Micraft MES',
  description: 'Review the terms and conditions for using Micraft MES manufacturing technology platforms and shop floor digitization tools.',
};

export default function TermsOfUsePage() {
  return (
    <Layout headerStyle={1} footerStyle={2}>
      <Breadcrumb breadcrumbTitle="Terms of Use" />
      
      <LegalContentSection title="Terms of Use" lastUpdated="April 9, 2026">
        <p>
          Welcome to Micraft MES. These Terms of Use govern your access to and use of our manufacturing execution systems and related industrial software services. By accessing or using our platform, you agree to comply with these terms.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By implementing or using Micraft MES within your manufacturing operations, you confirm your acceptance of these Terms. If you are using the platform on behalf of a company or legal entity, you represent that you have the authority to bind such entity to these terms.
        </p>

        <h2>2. Use of the Platform</h2>
        <p>
          Micraft MES is provided as a professional tool for manufacturing shop floor management. You agree to use the platform only for lawful industrial and business purposes and in accordance with these Terms.
        </p>
        <ul>
          <li><strong>Platform Integrity:</strong> You shall not attempt to reverse engineer, decompile, or disrupt the operation of the Micraft MES software.</li>
          <li><strong>Operational Accuracy:</strong> While Micraft MES facilitates data collection, the accuracy of manual entries by shop floor teams remains the responsibility of the user.</li>
          <li><strong>System Access:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your accounts.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          The Micraft MES software, including its architecture, algorithms, unique UI design, and branding, is the intellectual property of Micraft. Your use of the platform does not grant you ownership of any part of the system&apos;s codebase or technology.
        </p>

        <h2>4. Customer Data Ownership</h2>
        <p>
          You retain all rights, title, and interest in and to all data collected from your manufacturing operations (Production logs, Machine status data, etc.). You grant Micraft a limited license to process this data solely to provide and improve the MES services for your organization.
        </p>

        <h2>5. Limitation of Liability in Industrial Contexts</h2>
        <p>
          Micraft MES is an operational visibility tool. Micraft is not liable for production losses, quality issues, or equipment downtime resulting from operational decisions made based on system insights. The platform is provided &quot;as is&quot; and &quot;as available.&quot;
        </p>

        <h2>6. Service Maintenance & Updates</h2>
        <p>
          To ensure optimal performance on your shop floor, Micraft may perform periodic updates and maintenance. We strive to minimize disruptions to production operations during these updates.
        </p>

        <h2>7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to the platform if these Terms are violated or for non-payment of service fees.
        </p>

        <h2>8. Changes to These Terms</h2>
        <p>
          Micraft may update these Terms from time to time to reflect changes in our technology or legal requirements. Continued use of the platform after such changes constitutes acceptance of the new terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
        </p>
      </LegalContentSection>
    </Layout>
  );
}
