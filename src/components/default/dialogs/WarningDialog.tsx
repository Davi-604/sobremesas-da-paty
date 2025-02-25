import { Dialog, DialogContent } from '@/components/ui/dialog';
import { DefaultButton } from '../DefaultButton';
import { useRouter } from 'next/navigation';

type Props = {
    isOpen: boolean;
    onOpenChange: (value: boolean) => void;
    message: string;
    image?: string;
    cart?: boolean;
};
export const WarningDialog = ({ isOpen, onOpenChange, message, image, cart }: Props) => {
    const router = useRouter();

    return (
        <Dialog open={isOpen} onOpenChange={(value) => onOpenChange(value)}>
            <DialogContent className="flex flex-col justify-center text-center  p-5">
                {image && <img src={image} className="w-1/2 mx-auto" />}
                <div className={`text-2xl font-bold ${!image && 'mt-10'}`}>{message}</div>
                {cart && (
                    <div className="mt-5 flex flex-col max-w-[300px] mx-auto justify-center gap-5">
                        <DefaultButton
                            label="Ir para o carrinho"
                            onClick={() => router.push('/cart')}
                            variant="secondary"
                        />
                        <DefaultButton
                            label="Continuar comprando"
                            onClick={() => onOpenChange(false)}
                        />
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
