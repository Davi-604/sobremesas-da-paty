import { z } from 'zod';

export const contactSchema = z.object({
    name: z
        .string({ message: 'Formato inválido' })
        .trim()
        .min(2, 'Mínimo de 2 caracteres')
        .max(50, 'Máximo de 50 caracteres'),
    email: z.string({ message: 'Formato inválido' }).email('Digite um email válido'),
    cause: z.string({ message: 'Formato inválido' }).trim().min(2, 'Selecione uma opção'),
    message: z
        .string({ message: 'Formato inválido' })
        .trim()
        .min(5, 'Mínimo de 5 caracteres')
        .max(500, 'Máximo de 500 caracteres'),
});
