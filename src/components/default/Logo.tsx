import { getWebsiteData } from '@/services/website';
import { useEffect, useState } from 'react';

export const Logo = () => {
    const [logo, setLogo] = useState<string | null>(null);

    const handleGetLogo = async () => {
        const req = await getWebsiteData();
        setLogo(req.icon);
    };

    useEffect(() => {
        handleGetLogo();
    }, []);

    return (
        <>
            {logo && (
                <img src={logo} alt="Logo" className="max-w-[100px] lg:max-w-[150px]" />
            )}
        </>
    );
};
