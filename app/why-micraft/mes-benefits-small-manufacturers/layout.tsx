import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Benefits of MES for Small Manufacturing Companies | Micraft MES",
    description: "Learn how manufacturing execution systems help small manufacturers improve production visibility, machine utilization, and factory efficiency."
};

export default function SmallManufacturerBenefitsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
