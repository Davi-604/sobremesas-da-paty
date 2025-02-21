import { Section } from '@/types/Section';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
    section: Section;
    isFooterItem?: boolean;
};
export const NavItem = ({ section, isFooterItem }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div
            className={`flex items-center gap-3 text-xl font-light pb-1 border-b-2 hover:text-popover 
      hover:border-popover transition-all ease-in cursor-pointer 
        ${isFooterItem ? 'text-[15px] justify-center text-center pb-0.5' : ''}    
      ${
          pathname === section.href ? 'text-popover border-popover' : 'border-transparent'
      }`}
            onClick={() => {
                router.push(section.href);
            }}
        >
            {!isFooterItem && <section.Icon />}
            <span>{section.label}</span>
        </div>
    );
};
