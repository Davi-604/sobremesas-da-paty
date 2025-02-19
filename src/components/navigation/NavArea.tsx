import { sections } from '@/data/sections';
import { NavItem } from './NavItem';

export const NavArea = () => {
    return (
        <div className="flex flex-1 gap-10  ml-[200px] items-center">
            {sections.map((section, index) => (
                <NavItem key={index} section={section} />
            ))}
        </div>
    );
};
