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
                    <SelectItem value="duvida">Dúvida</SelectItem>
                    <SelectItem value="sugestao">Sugestão</SelectItem>
                    <SelectItem value="elogio">Elogio</SelectItem>
                    <SelectItem value="problemas-site">Problemas no site</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
            </Select>
            <FormMessage className="text-yellow-500" />
        </FormItem>
    );
};
