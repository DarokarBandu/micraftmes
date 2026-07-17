import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Manual vs Digital Production Tracking in Manufacturing | Micraft MES",
    description: "Learn the difference between manual and digital production tracking and how digital systems improve manufacturing visibility and efficiency"
};

export default function ManualVsDigitalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
