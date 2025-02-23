'use client';

import { useEffect, useState } from 'react';
import { Logo } from '../default/Logo';
import { ThemeToggle } from '../themes/ThemeToggle';
import { MenuBar } from './MenuBar';
import { NavArea } from './NavArea';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.scrollY]);

    return (
        <>
            <header
                className={`bg-chart-3 fixed z-50 w-full transition-opacity ease-in ${
                    isScrolled ? 'opacity-80 ' : 'opacity-100'
                }`}
            >
                <div className="flex items-center justify-between px-3 max-w-[1500px] mx-auto lg:justify-normal">
                    <Logo small={isScrolled} />
                    <div className="hidden lg:block">
                        <NavArea />
                    </div>
                    <div className=" lg:hidden">
                        <MenuBar />
                    </div>
                </div>
            </header>
            <div className="hidden lg:block">
                <ThemeToggle topPosition="20px" rightPosition="20px" />
            </div>
        </>
    );
};
