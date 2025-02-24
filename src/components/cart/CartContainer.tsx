'use client';

import { useCartStore } from '@/stores/cart';
import { CartProductItem } from './CartProductItem';
import { CartCheckoutArea } from './CartCheckoutArea';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

export const CartContainer = () => {
    const cart = useCartStore();

    return (
        <section className="px-3 py-10 max-w-[1200px] mx-auto mt-[102px] lg:mt-[154px]">
            <div className="text-2xl font-bold mb-7 lg:text-3xl">Carrinho de compras</div>
            {cart.cart.length > 0 && (
                <>
                    <div className="flex flex-col justify-center first:border-t-2">
                        {cart.cart.map((item) => (
                            <CartProductItem cartProduct={item} setCart={cart.setCart} />
                        ))}
                    </div>
                    <CartCheckoutArea cart={cart.cart} />
                </>
            )}
            {cart.cart.length <= 0 && (
                <div className="flex flex-col justify-center items-center opacity-60 gap-5 my-20">
                    <MdOutlineRemoveShoppingCart size={100} />
                    <div className="text-2xl font-bold text-center lg:text-4xl">
                        Não há sobremesas no seu carrinho ainda...
                    </div>
                </div>
            )}
        </section>
    );
};
