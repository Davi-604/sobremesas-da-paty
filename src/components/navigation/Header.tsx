'use client';

import { useEffect, useState } from 'react';
import { Logo } from '../default/Logo';
import { ThemeToggle } from '../themes/ThemeToggle';
import { MenuBar } from './MenuBar';
import { NavArea } from './NavArea';
import { DefaultButton } from '../default/DefaultButton';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
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
                className={`bg-chart-3 fixed top-0 z-50 w-full transition-opacity ease-in  ${
                    isScrolled ? 'opacity-80 ' : 'opacity-100'
                }`}
            >
                <div className="flex items-center px-3 max-w-[1200px] mx-auto">
                    <div className="flex-1 lg:flex-none">
                        <Logo small={isScrolled} />
                    </div>
                    <div className="hidden mr-32 lg:block">
                        <NavArea />
                    </div>
                    <div className="mr-10">
                        <DefaultButton
                            label="Carrinho"
                            onClick={() => router.push('/cart')}
                            Icon={FaShoppingCart}
                            small={window.innerWidth < 768}
                            variant="destructive"
                            cart
                        />
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
