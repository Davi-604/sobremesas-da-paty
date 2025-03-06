'use client';

import { sections } from '@/data/sections';
import { NavItem } from '../navigation/NavItem';
import { Logo } from './Logo';
import { SocialMediaItem } from './SocialMediaItem';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInLeft } from '@/animations/fadeIn';

export const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <footer ref={ref} className="bg-primary dark:bg-chart-1 text-sm text-white">
            <div
                className="mb-5 h-[177px]"
                style={{
                    backgroundImage: 'url(/calda-chocolate.png)',
                    backgroundPosition: 'center',
                }}
            ></div>
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInLeft}
                className="max-w-[1000px] p-4 mx-auto"
            >
                <div className="flex items-center justify-between lg:justify-around lg:gap-5">
                    <Logo />
                    <div className="w-0.5 bg-white h-[200px]"></div>
                    <div className="hidden flex-col gap-3 lg:flex">
                        <div className="text-xl font-semibold">Redes Sociais:</div>
                        <SocialMediaItem
                            Icon={FaInstagram}
                            href="https://www.instagram.com/sobremesas.dapaty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            label="@sobremesas.dapaty"
                            isFooterItem
                        />
                    </div>
                    <div className="hidden w-0.5 bg-white h-[200px] lg:block"></div>
                    <div className="flex flex-col gap-1 max-w-[125px] ">
                        <div className="text-xl font-semibold">Navegação:</div>
                        {sections.map((section, index) => (
                            <NavItem key={index} section={section} isFooterItem />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-7 lg:hidden">
                    <div className="text-xl font-semibold">Redes Sociais:</div>
                    <SocialMediaItem
                        Icon={FaInstagram}
                        href="https://www.instagram.com/sobremesas.dapaty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        label="@sobremesas.dapaty"
                        isFooterItem
                    />
                </div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInLeft}
                className=" py-5 text-center bg-primary dark:bg-chart-1  "
            >
                Todos os direitos reservados a Sobremesas da Paty
            </motion.div>
        </footer>
    );
};
