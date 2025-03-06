import { useRouter } from 'next/navigation';
import { DefaultButton } from '../default/DefaultButton';
import { ShowcaseItem } from './ShowCaseiItem';
import { motion } from 'framer-motion';
import { fadeInDown, fadeInUp } from '@/animations/fadeIn';
import { useInView } from 'react-intersection-observer';

export const ShowcaseArea = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const router = useRouter();

    return (
        <div
            ref={ref}
            className="px-3 mb-5 py-10 max-w-[1430px] mx-auto border-b-4 border-dashed border-primary"
        >
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInDown}
                className="font-bold text-center text-3xl lg:text-4xl"
            >
                O'que nós fazemos?
            </motion.div>
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                className="grid grid-cols-2 gap-5 mt-10 lg:grid-cols-4"
            >
                <ShowcaseItem label="Bolos caseiros" img="/bolo-desenho.png" />
                <ShowcaseItem label="Tortas" img="/tortas-desenho.png" />
                <ShowcaseItem label="Doces de festa" img="/doces-desenho.png" />
                <ShowcaseItem label="E muito mais..." img="/doces-variados.png" />
            </motion.div>
            <div className="max-w-[500px] mx-auto mt-10">
                <DefaultButton
                    label="Conheça nossas opções!"
                    onClick={() => router.push('/menu')}
                    variant="default"
                />
            </div>
        </div>
    );
};
