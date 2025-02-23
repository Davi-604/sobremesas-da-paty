import { Dialog, DialogClose, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Product } from '@/types/Product';
import { DefaultButton } from '../DefaultButton';
import { FaCartPlus } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
    isOpen: boolean;
    onOpenChange: (value: boolean) => void;
    product: Product;
};
export const ProductModal = ({ isOpen, onOpenChange, product }: Props) => {
    return (
        <Dialog open={isOpen} onOpenChange={(value) => onOpenChange(value)}>
            <DialogContent
                style={{ padding: '0px' }}
                className="border-none overflow-y-scroll lg:overflow-hidden"
            >
                {product.extra_images_urls.length > 0 && (
                    <div className="w-full h-[325px] overflow-x-hidden">
                        <Slider
                            infinite
                            dots
                            dotsClass="slick-dots"
                            speed={1000}
                            slidesToShow={1}
                            slidesToScroll={1}
                            autoplay
                            autoplaySpeed={3000}
                        >
                            <img
                                src={product.thumb_image_url}
                                className="w-full h-[300px] object-cover rounded-t-lg"
                            />
                            {product.extra_images_urls.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`extra-image-${index}`}
                                    className="w-full h-[300px] object-cover rounded-t-lg"
                                />
                            ))}
                        </Slider>
                    </div>
                )}
                {product.extra_images_urls.length === 0 && (
                    <img
                        src={product.thumb_image_url}
                        className="w-full h-[300px] object-cover rounded-t-lg"
                    />
                )}
                <div className="px-3 py-5 flex flex-col gap-5">
                    <h1 className="text-center font-bold text-2xl text-primary dark:text-chart-3 font-serif italic  md:text-3xl">
                        {product.name}
                    </h1>
                    <h2 className="text-2xl font-serif italic font-bold">
                        {product.price === 0
                            ? 'Preço a combinar'
                            : `R$ ${product.price?.toFixed(2).replace('.', ',')}`}
                    </h2>
                    <h3 className="text-sm text-muted-foreground font-semibold">
                        {product.description}
                    </h3>
                    <DefaultButton
                        label="Adicionar ao carrinho"
                        onClick={() => {}}
                        Icon={FaCartPlus}
                        variant="default"
                    />
                    <DefaultButton
                        label="Comprar agora!"
                        onClick={() => {}}
                        variant="secondary"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
