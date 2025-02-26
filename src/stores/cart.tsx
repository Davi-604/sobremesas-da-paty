import { CartItem } from '@/types/CartItem';
import { Product } from '@/types/Product';
import { create } from 'zustand';

type CartState = {
    cart: CartItem[];
    setCart: (product: Product, quantity: number) => void;
};
export const useCartStore = create<CartState>((set) => ({
    cart: (() => {
        let savedCart: string | null = '';
        if (typeof window !== 'undefined') {
            savedCart = localStorage.getItem('cart');
        }

        return savedCart ? JSON.parse(savedCart) : [];
    })(),
    setCart: (product, quantity) =>
        set((state) => {
            let newCart = state.cart;

            let currentProductId = newCart.findIndex(
                (item) => item.product.id === product.id
            );

            if (currentProductId < 0) {
                newCart.push({ product, quantity: 0 });
                currentProductId = newCart.findIndex(
                    (item) => item.product.id === product.id
                );
            }

            newCart[currentProductId].quantity += quantity;

            if (newCart[currentProductId].quantity <= 0) {
                newCart = newCart.filter((item) => item.product.id !== product.id);
            }

            if (typeof window !== 'undefined') {
                localStorage.setItem('cart', JSON.stringify(newCart));
            }

            return { ...state, cart: newCart };
        }),
}));
