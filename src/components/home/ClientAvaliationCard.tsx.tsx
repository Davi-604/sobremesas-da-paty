import { Avaliation } from '@/types/Avaliation';
import { FaRegUserCircle } from 'react-icons/fa';

type Props = {
    avaliation: Avaliation;
};
export const ClientAvaliationCard = ({ avaliation }: Props) => {
    return (
        <div className="flex flex-col items-center gap-4">
            {avaliation.avatar.trim() !== '' && (
                <img
                    src={avaliation.avatar}
                    className="size-[100px] rounded-full lg:size-[150px]"
                />
            )}
            {avaliation.avatar.trim() === '' && (
                <div>
                    <FaRegUserCircle className="size-[100px] lg:size-[150px]" />
                </div>
            )}
            <div className="text-xl font-bold text-center lg:text-2xl">
                {avaliation.client}
            </div>
            <div className="text-sm max-w-[500px] text-muted-foreground font-semibold text-center mb-10 lg:text-base">
                {avaliation.avaliation}
            </div>
        </div>
    );
};
