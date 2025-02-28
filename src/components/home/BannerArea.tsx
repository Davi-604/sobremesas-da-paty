import { getWebsiteData } from '@/services/website';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BannerSkeleton } from '../skeletons/BannerSkeleton';

export const BannerArea = () => {
    const [banners, setBanners] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleGetBanners = async () => {
        setLoading(true);
        const req = await getWebsiteData();
        setLoading(false);

        setBanners(req.banners);
    };

    useEffect(() => {
        handleGetBanners();
    }, []);

    return (
        <>
            <div className="mt-[102px] lg:mt-[154px] ">
                {banners.length > 0 && !loading && (
                    <Slider
                        infinite={banners.length > 1}
                        speed={1000}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay
                        autoplaySpeed={4000}
                    >
                        {banners.map((banner, index) => (
                            <div key={index}>
                                <img
                                    src={banner}
                                    alt={`Banner-${index}`}
                                    className="w-full h-[300px] md:h-[400px] lg:h-[570px] object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
            {loading && <BannerSkeleton />}
        </>
    );
};
