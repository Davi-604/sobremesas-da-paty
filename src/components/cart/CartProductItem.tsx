import { CartItem } from '@/types/CartItem';
import { useCartStore } from '@/stores/cart';
import { Product } from '@/types/Product';
import { CartQuantityHandler } from './CartQuantityHandler';

type Props = {
    cartProduct: CartItem;
    setCart: (product: Product, quantity: number) => void;
};
export const CartProductItem = ({ cartProduct, setCart }: Props) => {
    const cart = useCartStore();

    return (
        <div className="flex items-center border-b-2 py-5  ">
            <div className="flex-1">
                <img
                    src={cartProduct.product.thumb_image_url}
                    className="size-[100px] rounded-md object-cover"
                />
            </div>
            <div className="flex flex-col justify-center gap-3 md:flex-row md:justify-normal md:items-center md:gap-5 lg:gap-[200px]">
                <div className="text-sm font-semibold w-[200px] md:w-[220px] lg:text-lg">
                    {cartProduct.product.name}
                </div>
                <div className="text-sm font-bold lg:text-lg">
                    {cartProduct.product.price === 0
                        ? 'Preço a combinar'
                        : `R$ ${cartProduct.product.price?.toFixed(2).replace('.', ',')}`}
                </div>
                <CartQuantityHandler
                    product={cartProduct.product}
                    quantity={cartProduct.quantity}
                    setCart={setCart}
                    small={typeof window !== 'undefined' && window.innerWidth < 768}
                />
            </div>
        </div>
    );
};
