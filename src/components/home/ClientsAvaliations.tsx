import { getAvaliations } from '@/services/avaliations';
import { Avaliation } from '@/types/Avaliation';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ClientAvaliationCard } from './ClientAvaliationCard.tsx';
import { motion } from 'framer-motion';
import { fadeInDown, fadeInUp } from '@/animations/fadeIn';
import { useInView } from 'react-intersection-observer';

export const ClientsAvaliations = () => {
    const [avaliations, setAvaliations] = useState<Avaliation[]>([]);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const handleGetRevies = async () => {
        const req = await getAvaliations();

        setAvaliations(req);
    };

    useEffect(() => {
        handleGetRevies();
    }, []);

    return (
        <div ref={ref} className="px-10 py-16 max-w-[1430px] mx-auto ">
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInDown}
                className="font-bold text-center text-3xl lg:text-4xl"
            >
                O'que os nossos clientes dizem?
            </motion.div>
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                className="mt-20 max-w-[700px] mx-auto"
            >
                <Slider speed={1000} slidesToShow={1} slidesToScroll={1}>
                    {avaliations.map((avaliation, index) => (
                        <ClientAvaliationCard avaliation={avaliation} key={index} />
                    ))}
                </Slider>
            </motion.div>
        </div>
    );
};
