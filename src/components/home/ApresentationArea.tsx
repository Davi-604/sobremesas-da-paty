import { FaInstagram } from 'react-icons/fa';
import { SocialMediaItem } from '../default/SocialMediaItem';
import { motion } from 'framer-motion';
import { fadeInDown, fadeInLeft, fadeInRight, fadeInUp } from '@/animations/fadeIn';
import { useInView } from 'react-intersection-observer';

export const ApresentationArea = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div
            ref={ref}
            className="my-5 py-10 px-3 border-y-4 border-primary border-dashed max-w-[1430px] mx-auto"
        >
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInDown}
                className="font-bold text-center text-3xl lg:text-4xl lg:-mb-7"
            >
                Olá, somos a Adocica!
            </motion.div>
            <div className="flex flex-col items-center gap-3 md:flex-row">
                <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInLeft}
                    className="max-w-[350px] order-1 md:order-none lg:max-w-[500px] "
                >
                    <img src="/bolo.png" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInRight}
                    className="font-base italic text-center mt-10 max-w-[500px] mx-auto md:max-w-[600px] lg:text-xl lg:max-w-[800px] lg:text-left"
                >
                    Na Adocica, acreditamos que confeitaria vai muito além de fazer doces:
                    é sobre criar momentos inesquecíveis. Por isso nossas sobremesas
                    caseiras são feitas com todo carinho da minha casa para a sua mesa!
                    <br />
                    <br />
                    Nosso compromisso é oferecer um ambiente acolhedor, atendimento
                    impecável e, claro, sabores que encantam.
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                className="w-full text-center"
            >
                <span className="mx-auto text-2xl font-light lg:text-3xl">
                    Nossas redes sociais:
                </span>
                <div className="flex flex-col justify-center gap-5 mt-5 flex-wrap md:flex-row ">
                    <SocialMediaItem
                        Icon={FaInstagram}
                        href="https://www.instagram.com/patriciamagalhaesmedeiros?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        label={'@patriciamagalhaesmedeiros'}
                    />
                    <SocialMediaItem
                        Icon={FaInstagram}
                        href="https://www.instagram.com/patriciamagalhaesmedeiros?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        label={'@patriciamagalhaesmedeiros'}
                    />
                    <SocialMediaItem
                        Icon={FaInstagram}
                        href="https://www.instagram.com/patriciamagalhaesmedeiros?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        label={'@patriciamagalhaesmedeiros'}
                    />
                </div>
            </motion.div>
        </div>
    );
};
