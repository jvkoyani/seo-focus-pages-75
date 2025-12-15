import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free SEO Consultation | Book Now',
    description: 'Get a 30-min strategy session with our SEO experts. We\'ll analyze your site, competitors & show you exactly how to rank higher.',
};

export default function ConsultationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
