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

        setLogo(req.icon);
    };

    useEffect(() => {
        handleGetLogo();
    }, []);

    return (
        <>
            {logo && !loading && (
                <img
                    onClick={() => router.push('/')}
                    src={logo}
                    alt="Logo"
                    className={`max-w-[100px] lg:max-w-[150px] transition-all ease-in 
                    ${small ? 'max-w-[70px] lg:max-w-[80px]' : ''}`}
                />
            )}
            {loading && !logo && <LogoSkeleton />}
        </>
    );
};
