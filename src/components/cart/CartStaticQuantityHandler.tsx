import { Product } from '@/types/Product';
import { useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';

type Props = {
    product: Product;
    quantity: number;
    setQuantity: (quantity: number) => void;
};
export const CartStaticQuantityHandler = ({ product, quantity, setQuantity }: Props) => {
    return (
        <div className="flex gap-6 items-center text-sm">
            Quantidade
            <div className="flex text-lg items-center  rounded-lg border-2">
                <button
                    className={`p-3 border-r-2 transition-all ease-in
                    ${quantity > 0 ? 'hover:bg-chart-3 cursor-pointer' : 'opacity-70'}`}
                    disabled={quantity === 0}
                    onClick={() => setQuantity(quantity - 1)}
                >
                    <LuMinus strokeWidth={4} />
                </button>
                <div className="px-3">{quantity}</div>
                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 border-l-2 hover:bg-chart-3 cursor-pointer transition-all ease-in"
                >
                    <LuPlus strokeWidth={4} />
                </button>
            </div>
        </div>
    );
};
