import { getAvaliations } from '@/services/avaliations';
import { Avaliation } from '@/types/Avaliation';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ClientAvaliationCard } from './ClientAvaliationCard.tsx';

export const ClientsAvaliations = () => {
    const [avaliations, setAvaliations] = useState<Avaliation[]>([]);

    const handleGetRevies = async () => {
        const req = await getAvaliations();

        setAvaliations(req);
    };

    useEffect(() => {
        handleGetRevies();
    }, []);

    return (
        <div className="px-10 py-16 max-w-[1430px] mx-auto ">
            <h1 className="font-bold text-center text-3xl lg:text-4xl">
                O'que os nossos clientes dizem?
            </h1>
            <div className="mt-20 max-w-[700px] mx-auto">
                <Slider speed={1000} slidesToShow={1} slidesToScroll={1}>
                    {avaliations.map((avaliation, index) => (
                        <ClientAvaliationCard avaliation={avaliation} key={index} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};
