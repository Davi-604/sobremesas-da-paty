import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MetadataProvider } from '@/components/default/MetadataProvider';
import { ThemeProvider } from '@/components/themes/ThemeProvider';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/default/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Adocica',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <MetadataProvider />
            <body className={inter.className}>
                <ThemeProvider
                    defaultTheme="system"
                    attribute="class"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
