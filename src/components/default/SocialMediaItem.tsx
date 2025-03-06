import { IconType } from 'react-icons';

type Props = {
    href: string;
    Icon: IconType;
    label: string;
    isFooterItem?: boolean;
};
export const SocialMediaItem = ({ href, Icon, label, isFooterItem }: Props) => {
    return (
        <a
            href={href}
            target="_blank"
            className={`flex items-center gap-2 text-lg text-destructive cursor-pointer hover:underline lg:text-xl 
            ${isFooterItem ? 'text-white text-base font-light lg:text-[13px]' : ''} `}
        >
            <Icon size={24} className="" /> {label}
        </a>
    );
};
