import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/themes/ThemeProvider';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/default/Footer';
import { getWebsiteData } from '@/services/website';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getWebsiteData();

    return {
        title: metadata.title,
        description: metadata.description,
        icons: {
            icon: metadata.icon,
            shortcut: metadata.icon,
            apple: metadata.icon,
        },
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            url: 'https://www.sobremesasdapaty.com/',
            images: [{ url: metadata.logo, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: metadata.title,
            description: metadata.description,
            images: [metadata.logo],
        },
        keywords: [
            'bolos',
            'doces',
            'confeitaria',
            'sobremesas',
            'doçaria',
            'doces caseiros',
        ],
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
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
