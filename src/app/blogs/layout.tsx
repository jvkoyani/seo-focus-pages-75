import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SEO Blog | Tips, Trends & Strategies',
    description: 'Learn what actually works in SEO. Expert insights, actionable tips & latest algorithm updates to keep you ahead of competitors.',
};

export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
