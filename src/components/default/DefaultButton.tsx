import { IconType } from 'react-icons';
import { Button } from '../ui/button';

type Props = {
    label: string;
    variant?: 'secondary' | 'default' | 'destructive' | 'outline' | 'ghost' | 'link';
    onClick: () => void;
    disabled?: boolean;
    Icon?: IconType;
    small?: boolean;
};
export const DefaultButton = ({
    label,
    variant,
    onClick,
    Icon,
    small,
    disabled,
}: Props) => {
    return (
        <Button
            variant={variant}
            onClick={() => onClick()}
            className={`flex items-center gap-2 w-full
                ${small ? 'text-sm' : 'text-xl'}
            `}
            disabled={disabled}
            size={small ? 'sm' : 'lg'}
        >
            {Icon && (
                <Icon strokeWidth={3} style={{ height: '1.2rem', width: '1.2rem' }} />
            )}
            {label}
        </Button>
    );
};
