import { Product } from '@/types/Product';
import { DefaultButton } from '../default/DefaultButton';

type Props = {
    product: Product;
    onClick: (product: Product) => void;
};
export const MenuCard = ({ product, onClick }: Props) => {
    return (
        <div className="flex flex-col items-center gap-3 bg-card rounded-lg pb-4 px-2">
            <div
                className="h-[200px] lg:h-[300px] w-full overflow-hidden rounded-lg cursor-pointer"
                onClick={() => onClick(product)}
            >
                <img
                    src={product.thumb_image_url}
                    style={{ padding: '0px -8px' }}
                    className="h-full w-full rounded-lg object-cover mb-5 transition-transform duration-300 ease-in hover:scale-125 "
                />
            </div>
            <div className="text-center font-bold text-lg text-primary dark:text-chart-3 font-serif italic  lg:text-2xl">
                {product.name}
            </div>
            <div className="font-serif font-semibold lg:text-lg">
                {product.price === 0
                    ? 'Preço a combinar'
                    : `R$ ${product.price?.toFixed(2).replace('.', ',')}`}
            </div>
            <div className="">
                <DefaultButton
                    label="Eu quero!"
                    variant="default"
                    onClick={() => onClick(product)}
                    small={window.innerWidth < 768}
                />
            </div>
        </div>
    );
};
