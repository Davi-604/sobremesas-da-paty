'use client';

import { Category } from '@/types/Category';
import { KeyboardEvent, useEffect, useState } from 'react';
import { MenuCategorySelect } from './MenuCategorySelect';
import { getProducts } from '@/services/products';
import { Product } from '@/types/Product';
import { MenuCard } from './MenuCard';
import { MenuProductDialog } from './dialogs/MenuProductDialog';
import { MenuCardSkeleton } from '../skeletons/MenuCardSkeleton';
import { TbCakeOff } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInRight, fadeInUp } from '@/animations/fadeIn';
import { Input } from '../ui/input';
import { FaSearch } from 'react-icons/fa';

export const MenuContainer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [currentCategory, setCurrentCategory] = useState<Category>();
    const [products, setProducts] = useState<Product[]>([]);
    const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);
    const [searchField, setSearchField] = useState('');

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchField.toLowerCase())
    );

    const handleGetProductsFromCategory = async () => {
        if (!currentCategory) return;

        setProducts([]);

        setLoading(true);
        const req = await getProducts(currentCategory.id);
        setLoading(false);

        setProducts(req);
    };

    const handleEnterKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toLowerCase() === 'enter') {
            (e.target as HTMLInputElement).blur();
        }
    };

    useEffect(() => {
        handleGetProductsFromCategory();
    }, [currentCategory]);

    return (
        <section className="max-w-[1200px] mx-auto px-3 py-10 mt-[102px] lg:mt-[154px]">
            {!loading && products.length !== 0 && (
                <>
                    <div className="flex  items-center mb-5 ml-3">
                        <FaSearch className="-mr-7 z-50 " />
                        <Input
                            value={searchField}
                            onChange={(e) => setSearchField(e.target.value)}
                            placeholder={`Sobremesa dentro da categoria: '${currentCategory?.name.trim()}'`}
                            onKeyUp={(e) => handleEnterKeyUp(e)}
                            className="pl-10 w-full text-xs transition-all ease-in-out duration-300 focus:w-full md:w-1/2"
                        />
                    </div>
                    {searchField.trim() !== '' && (
                        <div className="my-5 font-semibold text-lg">
                            Pesquisando por: <b>{searchField}</b>
                        </div>
                    )}
                </>
            )}
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold lg:text-3xl">
                    {currentCategory?.name}
                </div>
                <MenuCategorySelect onChange={setCurrentCategory} />
            </div>
            {loading && products.length === 0 && <MenuCardSkeleton />}
            {!loading && products.length > 0 && (
                <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    ref={ref}
                    className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5"
                >
                    {searchField.trim() === '' && (
                        <>
                            {products.map((product) => (
                                <MenuCard
                                    product={product}
                                    onClick={() => {
                                        setCurrentProduct(product),
                                            setIsProductDialogOpen(true);
                                    }}
                                />
                            ))}
                        </>
                    )}
                    {searchField.trim() !== '' && (
                        <>
                            {filteredProducts.length !== 0 && (
                                <>
                                    {filteredProducts.map((product) => (
                                        <MenuCard
                                            product={product}
                                            onClick={() => {
                                                setCurrentProduct(product),
                                                    setIsProductDialogOpen(true);
                                            }}
                                        />
                                    ))}
                                </>
                            )}
                            {filteredProducts.length === 0 && (
                                <div className="text-2xl col-span-4 my-[100px] text-muted-foreground font-bold text-center lg:text-4xl">
                                    Não encontramos nenhuma sobremesa com:
                                    <b> {searchField}</b>
                                </div>
                            )}
                        </>
                    )}
                </motion.div>
            )}
            {!loading && products.length === 0 && (
                <div className="flex flex-col justify-center items-center opacity-60 gap-5 my-20">
                    <TbCakeOff size={100} />
                    <div className="text-2xl font-bold text-muted-foreground text-center lg:text-4xl">
                        Não há sobremesas nesta categoria...
                    </div>
                </div>
            )}

            {currentProduct && (
                <MenuProductDialog
                    isOpen={isProductDialogOpen}
                    onOpenChange={setIsProductDialogOpen}
                    product={currentProduct}
                />
            )}
        </section>
    );
};
