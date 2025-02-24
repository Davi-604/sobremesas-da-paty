'use client';

import { CgMenu } from 'react-icons/cg';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { sections } from '@/data/sections';
import { NavItem } from './NavItem';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeToggle } from '../themes/ThemeToggle';
import { DefaultButton } from '../default/DefaultButton';
import { FaShoppingCart } from 'react-icons/fa';

export const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <CgMenu className="size-10" />
            </SheetTrigger>
            <SheetContent className="bg-secondary">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-7 mt-10 ">
                    {sections.map((section, index) => (
                        <NavItem key={index} section={section} />
                    ))}
                    <div className="mt-10">
                        <DefaultButton
                            label="Carrinho de compras"
                            onClick={() => router.push('/cart')}
                            Icon={FaShoppingCart}
                            small
                            variant="destructive"
                        />
                    </div>
                </div>
                <ThemeToggle bottomPosition="10px" rightPosition="10px" />
            </SheetContent>
        </Sheet>
    );
};
