import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CartClientForm } from '../form/CartClientForm';
import { useRouter } from 'next/navigation';

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
                    <DialogTitle className="text-center text-xl lg:text-2xl">
                        Dados do cliente
                    </DialogTitle>
                    <div className="text-destructive text-center font-bold text-sm ">
                        ** Entregas somente em Patos de Minas - MG **
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
