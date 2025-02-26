import { useRouter } from 'next/navigation';
import { DefaultButton } from '../default/DefaultButton';
import { ShowcaseItem } from './ShowCaseiItem';

export const ShowcaseArea = () => {
    const router = useRouter();

    return (
        <div className="px-3 mb-5 py-10 max-w-[1430px] mx-auto border-b-4 border-dashed border-primary">
            <h1 className="font-bold text-center text-3xl lg:text-4xl">
                O'que nós fazemos?
            </h1>
            <div className="grid grid-cols-2 gap-5 mt-10 lg:grid-cols-4">
                <ShowcaseItem label="Bolos caseiros" img="/bolo-desenho.png" />
                <ShowcaseItem label="Tortas" img="/tortas-desenho.png" />
                <ShowcaseItem label="Doces de festa" img="/brigadeiros-desenho.png" />
                <ShowcaseItem label="E muito mais..." img="/doces-variados.png" />
            </div>
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
