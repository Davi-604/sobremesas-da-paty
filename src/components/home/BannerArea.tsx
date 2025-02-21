import { getWebsiteData } from '@/services/website';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const BannerArea = () => {
    const [banners, setBanners] = useState<string[]>([]);

    const handleGetBanners = async () => {
        const req = await getWebsiteData();
        setBanners(req.banners);
    };

    useEffect(() => {
        handleGetBanners();
    }, []);

    return (
        <div className="mt-[102px] lg:mt-[154px]">
            {banners.length > 0 && (
                <Slider
                    infinite={banners.length > 1}
                    speed={1000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay
                    autoplaySpeed={5000}
                >
                    {banners.map((banner, index) => (
                        <div key={index}>
                            <img
                                src={banner}
                                alt={`Banner-${index}`}
                                className="w-full h-[320px] object-cover lg:h-[600px]"
                            />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};
