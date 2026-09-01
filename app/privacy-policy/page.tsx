import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import LegalContentSection from "@/components/sections/InnerSection/LegalContentSection";

export const metadata = {
  alternates: {
    canonical: '/privacy-policy',
  },
  title: 'Privacy Policy | Micraft MES',
  description: 'Learn how Micraft MES handles manufacturing data, shop floor insights, and plant operational privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <Layout headerStyle={1} footerStyle={2}>
      <Breadcrumb breadcrumbTitle="Privacy Policy" />
      
      <LegalContentSection title="Privacy Policy" lastUpdated="April 9, 2026">
        <p>
          At Micraft, we understand that manufacturing data is one of your most valuable assets. This Privacy Policy describes how Micraft collects, uses, and protects information when you use the Micraft MES platform and related manufacturing technology solutions.
        </p>

        <h2>1. Information Collection in Manufacturing Environments</h2>
        <p>
          Micraft MES is designed to capture and process operational data directly from the factory floor. The types of data we collect include:
        </p>
        <ul>
          <li><strong>Production Data:</strong> Work order progress, production quantities, scrap counts, and downtime logs.</li>
          <li><strong>Machine Performance Data:</strong> Real-time status, utilization metrics, and cycle times captured from integrated equipment.</li>
          <li><strong>Quality Metrics:</strong> Inspection results, defect logs, and compliance records.</li>
          <li><strong>User Account Information:</strong> For authorized plant personnel accessing the dashboard (e.g., login credentials, user roles).</li>
        </ul>

        <h2>2. How We Use Manufacturing Insights</h2>
        <p>
          The data captured is used primarily to provide real-time operational visibility to your plant teams. Specific uses include:
        </p>
        <ul>
          <li>Providing centralized dashboards for monitoring factory performance.</li>
          <li>Generating automated production reports and downtimes analysis.</li>
          <li>Enabling real-time alerts for production bottlenecks or quality deviations.</li>
          <li>Identifying trends to help optimize manufacturing efficiency.</li>
          <li>Maintaining system security and preventing unauthorized access to your plant data.</li>
        </ul>

        <h2>3. Data Confidentiality & Security</h2>
        <p>
          Micraft implements enterprise-grade security measures to protect manufacturing data. We prioritize the confidentiality of your production workflows and proprietary processes.
        </p>
        <p>
          Your shop floor data is encrypted both in transit and at rest. Access to the platform is restricted via role-based access controls (RBAC), ensuring that sensitive operational data is only visible to authorized personnel.
        </p>

        <h2>4. Data Ownership & Third Parties</h2>
        <p>
          We believe you own your manufacturing data. Micraft does not sell or lease your production data to third parties. We may share information with service providers only as necessary to support the technical delivery of the Micraft MES platform.
        </p>

        <h2>5. Compliance & Industrial Standards</h2>
        <p>
          Micraft is committed to maintaining data privacy standards that align with industrial best practices. We continually update our security protocols to address emerging threats in the manufacturing technology landscape.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have questions regarding our data handling practices or this Privacy Policy, please contact our security team at:
        </p>
        <p>
          <strong>Email:</strong> support@micraft.co.in<br />
          <strong>Address:</strong> 603, White Square, Hinjewadi-Wakad Road, Pune, Maharashtra 411057
        </p>
      </LegalContentSection>
    </Layout>
  );
}
