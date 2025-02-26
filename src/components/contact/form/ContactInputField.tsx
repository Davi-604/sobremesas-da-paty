import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema } from '@/schemas/contactSchema';
import { ControllerRenderProps, FieldPath, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

type Props = {
    label: string;
    placeholder: string;
    name: FieldPath<z.infer<typeof contactSchema>>;
    field: ControllerRenderProps<z.infer<typeof contactSchema>>;
    form: UseFormReturn<z.infer<typeof contactSchema>>;
    disabled: boolean;
    focus?: boolean;
    textarea?: boolean;
};
export const ContactInputField = ({
    label,
    placeholder,
    name,
    field,
    form,
    disabled,
    focus,
    textarea,
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
                        disabled={disabled}
                        onChange={(e) => {
                            field.onChange(e);
                            form.clearErrors(name);
                        }}
                    />
                </FormControl>
            )}
            {textarea && (
                <FormControl>
                    <Textarea
                        placeholder={placeholder}
                        className="h-[200px] text-ellipsis whitespace-normal transition-colors ease-in resize-none"
                        disabled={disabled}
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
