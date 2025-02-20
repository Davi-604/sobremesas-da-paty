import { Section } from '@/types/Section';
import { LuContact, LuDessert, LuHouse } from 'react-icons/lu';
import { BsPeople } from 'react-icons/bs';

export const sections: Section[] = [
    { id: 'home', label: 'Home', Icon: LuHouse, href: '/' },
    { id: 'menu', label: 'Sobremesas', Icon: LuDessert, href: '/menu' },
    {
        id: 'clients',
        label: "O'que nossos clientes dizem?",
        Icon: BsPeople,
        href: '/clients',
    },
    { id: 'contact', label: 'Contato', Icon: LuContact, href: '/contact' },
];
