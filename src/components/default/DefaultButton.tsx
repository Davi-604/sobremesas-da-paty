import { IconType } from 'react-icons';
import { Button } from '../ui/button';
import { useCartStore } from '@/stores/cart';

type Props = {
    label: string;
    variant?: 'secondary' | 'default' | 'destructive' | 'outline' | 'ghost' | 'link';
    onClick: () => void;
    disabled?: boolean;
    Icon?: IconType;
    small?: boolean;
    cart?: boolean;
};
export const DefaultButton = ({
    label,
    variant,
    onClick,
    Icon,
    small,
    disabled,
    cart,
}: Props) => {
    const cartProvider = useCartStore();

    return (
        <div className="flex ">
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
            {cart && cartProvider.cart.length > 0 && (
                <div className=" -mt-1 -ml-2 size-3 rounded-full bg-white"></div>
            )}
        </div>
    );
};
