import { Section } from '@/types/Section';
import { LuContact, LuDessert, LuHouse } from 'react-icons/lu';
import { IoStorefrontOutline } from 'react-icons/io5';

export const sections: Section[] = [
    { id: 'home', label: 'Home', Icon: LuHouse, href: '/' },
    { id: 'about', label: 'Sobre a Adocica', Icon: IoStorefrontOutline, href: '/about' },
    { id: 'menu', label: 'Sobremesas', Icon: LuDessert, href: '/menu' },
    { id: 'contact', label: 'Contato', Icon: LuContact, href: '/contact' },
];
