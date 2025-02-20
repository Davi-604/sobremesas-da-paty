type Props = {
    label: string;
    img: string;
};
export const ShowcaseItem = ({ label, img }: Props) => {
    return (
        <div className="flex flex-col justify-center items-center p-5 gap-5 hover:scale-110 transition-all ease-in">
            <img src={img} className="size-[100px] lg:size-[200px]" />
            <p className="text-xl font-semibold text-center italic text-destructive">
                {label}
            </p>
        </div>
    );
};
