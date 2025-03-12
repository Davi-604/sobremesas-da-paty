import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { clientSchema } from '@/schemas/clientSchema';
import { ControllerRenderProps, FieldPath, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

type Props = {
    label: string;
    placeholder: string;
    name: FieldPath<z.infer<typeof clientSchema>>;
    field: ControllerRenderProps<z.infer<typeof clientSchema>>;
    form: UseFormReturn<z.infer<typeof clientSchema>>;
    textarea?: boolean;
    number?: boolean;
    focus?: boolean;
};
export const CartClientInputField = ({
    label,
    placeholder,
    focus,
    name,
    field,
    form,
    textarea,
    number,
}: Props) => {
    return (
        <FormItem>
            <FormLabel className="text-lg">{label}</FormLabel>
            {!textarea && (
                <FormControl>
                    <Input
                        {...(focus && { autoFocus: true })}
                        className="text-ellipsis whitespace-normal transition-all ease-in"
                        placeholder={placeholder}
                        onChange={(e) => {
                            if (number) {
                                field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                            } else {
                                field.onChange(e);
                            }
                            form.clearErrors(name);
                        }}
                        {...(number && {
                            value: field.value
                                ? String(field.value).replace('.', ',')
                                : '',
                            type: 'tel',
                        })}
                    />
                </FormControl>
            )}
            {textarea && (
                <FormControl>
                    <Textarea
                        placeholder={placeholder}
                        className="h-[120px] text-ellipsis whitespace-normal transition-colors ease-in resize-none"
                        onChange={(e) => {
                            field.onChange(e);
                            form.clearErrors(name);
                        }}
                    ></Textarea>
                </FormControl>
            )}
            <FormMessage className="text-yellow-500" />
        </FormItem>
    );
};
