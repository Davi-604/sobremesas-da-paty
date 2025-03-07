import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CartClientForm } from '../form/CartClientForm';
import { useRouter } from 'next/navigation';
import { IoWarning } from 'react-icons/io5';

type Props = {
    isOpen: boolean;
    onOpenChange: (value: boolean) => void;
};
export const CartCheckoutDialog = ({ isOpen, onOpenChange }: Props) => {
    const router = useRouter();

    return (
        <Dialog open={isOpen} onOpenChange={(value) => onOpenChange(value)}>
            <DialogContent className="overflow-y-scroll h-full lg:overflow-y-auto lg:h-auto">
                <DialogHeader className="mb-3">
                    <DialogTitle className="text-center text-xl mb-5 lg:text-2xl">
                        Dados do cliente
                    </DialogTitle>
                    <div className="flex items-center bg-destructive gap-3 text-xs text-left font-bold p-2 rounded-lg md:text-sm">
                        <IoWarning size={50} />
                        As sobremesas não estão necessariamente disponíveis para pronta
                        entrega, mas sim para serem encomendadas.
                    </div>
                </DialogHeader>
                <CartClientForm
                    onFinish={() => {
                        onOpenChange(false);
                        router.push('/');
                    }}
                />
            </DialogContent>
        </Dialog>
    );
};
