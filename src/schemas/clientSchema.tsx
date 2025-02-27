import { z } from 'zod';

export const clientSchema = z.object({
    name: z
        .string({ message: 'Campo obrigatório' })
        .trim()
        .min(2, 'Mínimo de 2 caracteres')
        .max(50, 'Máximo de 50 caracteres'),
    street: z
        .string({ message: 'Campo obrigatório' })
        .trim()
        .min(1, 'Mínimo de 1 caracteres')
        .max(35, 'Máximo de 35 caracteres'),
    number: z
        .string({ message: 'Campo obrigatório' })
        .min(1, 'Digite um valor maior do que 1'),
    neighborhood: z
        .string({ message: 'Campo obrigatório' })
        .trim()
        .min(3, 'Mínimo de 3 caracteres')
        .max(260, 'Máximo de 260 caracteres'),
    complement: z
        .string({ message: 'Campo obrigatório' })
        .trim()
        .min(3, 'Mínimo de 3 caracteres')
        .max(30, 'Máximo de 30 caracteres')
        .optional(),
});
