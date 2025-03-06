'use client';

import { clientSchema } from '@/schemas/clientSchema';
import { useCartStore } from '@/stores/cart';
import { CartItem } from '@/types/CartItem';
import { z } from 'zod';

export const generateMessage = (data: z.infer<typeof clientSchema>, cart: CartItem[]) => {
    let orderProducts = [];
    for (let i of cart) {
        orderProducts.push(
            `. ${i.quantity}x ${i.product.name} - ${
                i.product.price === 0
                    ? 'Preço a combinar'
                    : `R$ ${((i.product.price as number) * i.quantity)
                          .toFixed(2)
                          .replace('.', ',')}`
            }`
        );
    }

    const finalPrice = cart.reduce(
        (acc, item) => acc + item.quantity * (item.product.price || 0),
        0
    );

    return `*Dados Pessoais* \n
Nome: ${data.name}
Endereço: ${data.street}, ${data.number} - ${data.neighborhood}
${data.complement ? ` (${data.complement})` : null}

- - - - -

*Pedidos* \n
${orderProducts.join('\n')}

*Valor total das sobremesas:* ${
        finalPrice === 0
            ? 'Preço a combinar'
            : 'R$ ' + finalPrice.toFixed(2).replace('.', ',')
    }
    
*Frete:* a combinar com o atendimento`;
};
