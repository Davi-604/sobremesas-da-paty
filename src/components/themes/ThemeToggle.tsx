'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LuLaptop, LuMoon, LuSun } from 'react-icons/lu';

type Props = {
    topPosition?: string;
    bottomPosition?: string;
    rightPosition?: string;
    leftPosition?: string;
};
export function ThemeToggle({
    topPosition,
    bottomPosition,
    rightPosition,
    leftPosition,
}: Props) {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                style={{
                    top: topPosition,
                    bottom: bottomPosition,
                    right: rightPosition,
                    left: leftPosition,
                }}
                className="fixed"
            >
                <Button variant="outline" size="icon" className="rounded-full scale-125">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Escolha um tema</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <LuSun size={16} /> Claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <LuMoon size={16} /> Escuro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <LuLaptop size={16} /> Sistema
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
