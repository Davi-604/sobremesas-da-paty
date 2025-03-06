import { getWebsiteData } from '@/services/website';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { set } from 'zod';
import { LogoSkeleton } from '../skeletons/LogoSkeleton';

type Props = {
    small?: boolean;
};
export const Logo = ({ small }: Props) => {
    const [logo, setLogo] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleGetLogo = async () => {
        setLoading(true);
        const req = await getWebsiteData();
        setLoading(false);

        setLogo(req.logo);
    };

    useEffect(() => {
        handleGetLogo();
    }, []);

    return (
        <>
            {logo && !loading && (
                <img
                    loading="lazy"
                    onClick={() => router.push('/')}
                    src={logo}
                    alt="Logo"
                    className={`size-[100px] lg:size-[150px] transition-all ease-in object-cover cursor-pointer 
                    ${small ? 'size-[70px] lg:size-[80px]' : ''}`}
                />
            )}
            {loading && !logo && <LogoSkeleton />}
        </>
    );
};
