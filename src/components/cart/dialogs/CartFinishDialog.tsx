import { DefaultButton } from '@/components/default/DefaultButton';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { clientSchema } from '@/schemas/clientSchema';
import { useCartStore } from '@/stores/cart';
import { generateMessage } from '@/utils/generateMessage';
import { FaWhatsapp } from 'react-icons/fa';
import { z } from 'zod';
import { RiArrowGoBackFill } from 'react-icons/ri';

type Props = {
    isOpen: boolean;
    onOpenChange: (value: boolean) => void;
    onFinish: () => void;
    clientData: z.infer<typeof clientSchema>;
};
export const CartFinishDialog = ({
    isOpen,
    onOpenChange,
    clientData,
    onFinish,
}: Props) => {
    const cart = useCartStore();
    const handleRedirectToWhatsapp = () => {
        const message = generateMessage(clientData, cart.cart);

        const url = `https://wa.me//${
            process.env.NEXT_PUBLIC_PHONE_NUMBER
        }?text=${encodeURI(message)}`;

        if (typeof window !== 'undefined') {
            window.open(url, '_blank');
        }

        cart.clearCart();
        onFinish();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(value) => onOpenChange(value)}>
            <DialogContent>
                <DialogHeader className="mb-5">
                    <DialogTitle className="text-center text-2xl font-bold my-3 lg:text-3xl">
                        Perfeito {clientData.name}!
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        Agora envie o seu pedido para o nosso WhatsApp clicando no botão
                        abaixo e nosso atendimento irá prosseguir com o seu pedido.
                    </DialogDescription>
                    <strong className="text-center text-destructive pt-3">
                        ** Por favor, não altere a mensagem antes de enviá-la **
                    </strong>
                </DialogHeader>
                <DefaultButton
                    label="Enviar para o WhatsApp"
                    onClick={handleRedirectToWhatsapp}
                    Icon={FaWhatsapp}
                    small={typeof window !== 'undefined' && window.innerWidth < 375}
                />
                <DefaultButton
                    label="Alterar informações"
                    onClick={() => onOpenChange(false)}
                    Icon={RiArrowGoBackFill}
                    variant="ghost"
                    small={typeof window !== 'undefined' && window.innerWidth < 375}
                />
            </DialogContent>
        </Dialog>
    );
};
