import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '#/lib/utils';
import '#/styles/index.scss';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'Next Web Starter',
    description: 'Next.js starter template with TypeScript, Tailwind CSS, and more',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
