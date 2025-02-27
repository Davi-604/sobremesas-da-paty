import { Form, FormField } from '@/components/ui/form';
import { clientSchema } from '@/schemas/clientSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CartClientInputField } from './CartClientInputField';
import { DefaultButton } from '@/components/default/DefaultButton';
import { generateMessage } from '@/utils/generateMessage';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CartFinishDialog } from '../dialogs/CartFinishDialog';

type Props = {
    onFinish: () => void;
};
export const CartClientForm = ({ onFinish }: Props) => {
    const [isFinishDialogOpen, setIsFinishDialogOpen] = useState(false);

    const form = useForm<z.infer<typeof clientSchema>>({
        resolver: zodResolver(clientSchema),
        defaultValues: {
            name: '',
        },
    });

    const onSubmit = () => {
        setIsFinishDialogOpen(true);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <CartClientInputField
                                field={field}
                                form={form}
                                label="Nome"
                                placeholder="Digite o seu nome"
                                name={field.name}
                                focus
                            />
                        )}
                    />
                    <FormField
                        name="street"
                        control={form.control}
                        render={({ field }) => (
                            <CartClientInputField
                                field={field}
                                form={form}
                                label="Rua"
                                placeholder="Digite o nome da sua rua"
                                name={field.name}
                            />
                        )}
                    />
                    <FormField
                        name="neighborhood"
                        control={form.control}
                        render={({ field }) => (
                            <CartClientInputField
                                field={field}
                                form={form}
                                label="Bairro"
                                placeholder="Digite o nome do seu bairro"
                                name={field.name}
                            />
                        )}
                    />
                    <FormField
                        name="number"
                        control={form.control}
                        render={({ field }) => (
                            <CartClientInputField
                                field={field}
                                form={form}
                                label="Número da casa"
                                placeholder="Digite o seu número"
                                name={field.name}
                                number
                            />
                        )}
                    />
                    <div className="w-full lg:col-span-2">
                        <FormField
                            name="complement"
                            control={form.control}
                            render={({ field }) => (
                                <CartClientInputField
                                    field={field}
                                    form={form}
                                    label="Complemento (opcional)"
                                    placeholder="Digite um complemento"
                                    name={field.name}
                                    textarea
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <DefaultButton
                        label="Enviar dados"
                        onClick={() => form.handleSubmit(onSubmit)}
                    />
                </div>
            </form>
            <CartFinishDialog
                isOpen={isFinishDialogOpen}
                onOpenChange={setIsFinishDialogOpen}
                clientData={form.getValues()}
                onFinish={onFinish}
            />
        </Form>
    );
};
