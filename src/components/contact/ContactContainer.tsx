'use client';

import { ContactForm } from './form/ContactForm';

export const ContactContainer = () => {
    return (
        <section className="max-w-[1000px] mx-auto px-3 py-10 mt-[102px] lg:mt-[154px]">
            <div className="text-2xl text-center font-bold mb-10 lg:text-3xl">
                Deixe a sua mensagem conosco
            </div>
            <ContactForm />
        </section>
    );
};
