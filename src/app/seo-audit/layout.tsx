import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free SEO Audit Tool | Instant Analysis',
    description: 'Discover why your site isn\'t ranking. Our free tool analyzes 50+ SEO factors and shows you exactly what to fix. Try it now →',
};

export default function AuditLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
