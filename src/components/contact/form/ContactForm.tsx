import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { contactSchema } from '@/schemas/contactSchema';
import { useForm } from 'react-hook-form';
import { set, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactInputField } from './ContactInputField';
import { useState } from 'react';
import { DefaultButton } from '@/components/default/DefaultButton';
import emailjs from 'emailjs-com';
import { WarningDialog } from '@/components/default/dialogs/WarningDialog';
import { ContactSelectField } from './ContactSelectField';

export const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [isWarningDialogOpen, setIsWarningDialogOpen] = useState(false);
    const [ThereMailError, setThereMailError] = useState(false);

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            cause: '',
            message: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof contactSchema>) => {
        setLoading(true);
        try {
            const templateParams = {
                from_name: data.name,
                email: data.email,
                cause: `${data.cause.charAt(0).toUpperCase()}${data.cause.slice(1)}`,
                message: data.message,
            };

            const res = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            );

            setIsWarningDialogOpen(true);
            setThereMailError(false);
            console.log(res.text);
        } catch (err) {
            console.log(err);
            setIsWarningDialogOpen(true);
            setThereMailError(true);
        }
        setLoading(false);
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5 md:flex-row"
            >
                <div className="flex w-full flex-col justify-between gap-5 ">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <ContactInputField
                                field={field}
                                disabled={loading}
                                form={form}
                                label="Nome"
                                placeholder="Digite seu nome"
                                name={field.name}
                                focus
                            />
                        )}
                    />
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <ContactInputField
                                field={field}
                                disabled={loading}
                                form={form}
                                label="E-mail"
                                placeholder="Digite o seu e-mail"
                                name={field.name}
                            />
                        )}
                    />
                    <FormField
                        name="cause"
                        control={form.control}
                        render={({ field }) => <ContactSelectField field={field} />}
                    />
                </div>
                <div className="flex w-full flex-col gap-5">
                    <FormField
                        name="message"
                        control={form.control}
                        render={({ field }) => (
                            <ContactInputField
                                field={field}
                                disabled={loading}
                                form={form}
                                label="Mensagem"
                                placeholder="Digite a sua mensagem"
                                name={field.name}
                                textarea
                            />
                        )}
                    />
                    <DefaultButton
                        label="Enviar formulário"
                        onClick={() => form.handleSubmit(onSubmit)()}
                        disabled={loading}
                        variant="secondary"
                    />
                </div>
            </form>
            {ThereMailError && (
                <WarningDialog
                    isOpen={isWarningDialogOpen}
                    image="/email-erro.png"
                    onOpenChange={setIsWarningDialogOpen}
                    message="Erro ao enviar sua mensagem por favor tente novamente mais tarde."
                />
            )}
            {!ThereMailError && (
                <WarningDialog
                    image="/email-enviado.png"
                    isOpen={isWarningDialogOpen}
                    onOpenChange={setIsWarningDialogOpen}
                    message="Sua mensagem foi enviada com sucesso!"
                />
            )}
        </Form>
    );
};
