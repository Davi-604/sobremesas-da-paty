import { IconType } from 'react-icons';

type Props = {
    href: string;
    Icon: IconType;
    label: string;
};
export const SocialMediaItem = ({ href, Icon, label }: Props) => {
    return (
        <a
            href={href}
            className="flex items-center gap-2 text-lg text-destructive cursor-pointer hover:underline lg:text-xl"
        >
            <Icon size={24} className="" /> {label}
        </a>
    );
};
