'use client';

import { Logo } from '../default/Logo';
import { ThemeToggle } from '../themes/ThemeToggle';
import { MenuBar } from './MenuBar';
import { NavArea } from './NavArea';

export const Header = () => {
    return (
        <header className="bg-chart-3 ">
            <div className="flex items-center justify-between px-3 max-w-[1500px] mx-auto lg:justify-normal">
                <>
                    <Logo />
                </>
                <div className="hidden lg:block">
                    <NavArea />
                </div>
                <div className=" lg:hidden">
                    <MenuBar />
                </div>
                <div className="hidden lg:block">
                    <ThemeToggle topPosition="20px" rightPosition="20px" />
                </div>
            </div>
        </header>
    );
};
