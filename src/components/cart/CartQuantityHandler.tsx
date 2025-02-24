import { Product } from '@/types/Product';
import { useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';

type Props = {
    product: Product;
    quantity: number;
    setCart: (product: Product, quantity: number) => void;
    small?: boolean;
};
export const CartQuantityHandler = ({ product, quantity, setCart, small }: Props) => {
    return (
        <div className={`flex items-center text-sm gap-3`}>
            Quantidade
            <div
                className={`flex items-center rounded-lg border-2 
            ${small ? 'text-sm' : 'text-lg'}`}
            >
                <button
                    className={` border-r-2 transition-all ease-in
                    ${quantity > 0 ? 'hover:bg-chart-3 cursor-pointer' : 'opacity-70'}
                    ${small ? 'p-2' : 'p-3'}`}
                    disabled={quantity === 0}
                    onClick={() => setCart(product, -1)}
                >
                    <LuMinus strokeWidth={4} />
                </button>
                <div className="px-3">{quantity}</div>
                <button
                    className={` border-l-2 transition-all ease-in hover:bg-chart-3 cursor-pointer
                    ${small ? 'p-2' : 'p-3'}`}
                    onClick={() => setCart(product, 1)}
                >
                    <LuPlus strokeWidth={4} />
                </button>
            </div>
        </div>
    );
};
