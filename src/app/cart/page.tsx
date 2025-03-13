import { CartContainer } from '@/components/cart/CartContainer';
import { getWebsiteData } from '@/services/website';
import { Metadata } from 'next';

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
    };
}
const Page = () => {
    return <CartContainer />;
};

export default Page;
