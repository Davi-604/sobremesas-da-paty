'use client';

import { useEffect, useState } from 'react';
import { getWebsiteData } from '@/services/website';
import { WebsiteData } from '@/types/WebsiteData';

export const MetadataProvider = () => {
    const [metadata, setMetadata] = useState<WebsiteData | null>(null);

    const handleGetIcon = async () => {
        const req = await getWebsiteData();
        setMetadata(req);
    };
    useEffect(() => {
        handleGetIcon();
    }, []);

    return (
        <head>
            {metadata && <div dangerouslySetInnerHTML={{ __html: metadata.metadata }} />}
            {metadata && <link rel="icon" href={metadata.icon} />}
        </head>
    );
};
