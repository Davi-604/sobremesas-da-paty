import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { contactSchema } from '@/schemas/contactSchema';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';

type Props = {
    field: ControllerRenderProps<z.infer<typeof contactSchema>>;
};
export const ContactSelectField = ({ field }: Props) => {
    return (
        <FormItem>
            <FormLabel className="text-lg ">Motivo do contato</FormLabel>
            <Select onValueChange={(value) => field.onChange(value)}>
                <SelectTrigger className="font-semibold">
                    <SelectValue placeholder="Selecione o motivo do contato" />
                </SelectTrigger>
                <SelectContent className="font-semibold">
                    <SelectItem value="question">Dúvida</SelectItem>
                    <SelectItem value="sugestion">Sugestão</SelectItem>
                    <SelectItem value="compliment">Elogio</SelectItem>
                    <SelectItem value="sysProblem">Problemas no site</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
            </Select>
            <FormMessage className="text-yellow-500" />
        </FormItem>
    );
};
