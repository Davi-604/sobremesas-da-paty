import { Section } from '@/types/Section';
import { LuContact, LuDessert, LuHouse } from 'react-icons/lu';
import { BsPeople } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

export const sections: Section[] = [
    { id: 'home', label: 'Home', Icon: LuHouse, href: '/' },
    { id: 'menu', label: 'Sobremesas', Icon: LuDessert, href: '/menu' },
    { id: 'contact', label: 'Contato', Icon: LuContact, href: '/contact' },
];
