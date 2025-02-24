import { CartItem } from '@/types/CartItem';
import { DefaultButton } from '../default/DefaultButton';

type Props = {
    cart: CartItem[];
};
export const CartCheckoutArea = ({ cart }: Props) => {
    return (
        <div className="mt-10 p-5 rounded-lg bg-popover max-w-[500px] mx-auto">
            <div className="text-2xl font-bold mb-5 lg:text-3xl">Resumo</div>
            <div className="flex flex-col justify-center gap-5">
                <div className="flex items-center gap-3">
                    <div className="text-lg font-semibold md:text-xl lg:text-xl">
                        Total:
                    </div>
                    <div className="text-lg font-semibold md:text-xl lg:text-xl">
                        {cart
                            .reduce(
                                (acc, item) =>
                                    acc + item.quantity * (item.product.price || 0),
                                0
                            )
                            .toFixed(2)
                            .replace('.', ',')}
                    </div>
                </div>
                {cart.find((item) => item.product.price === 0) && (
                    <div className="text-xs -mt-3 p-2 rounded-md bg-muted">
                        Para as sobremesas com os preços a combinar, a nossa equipe
                        conversará com você a respeito do pedido para obter o melhor
                        preço.
                    </div>
                )}
                <DefaultButton label="Finalizar compra" onClick={() => {}} />
            </div>
        </div>
    );
};
