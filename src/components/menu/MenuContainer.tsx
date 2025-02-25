'use client';

import { Category } from '@/types/Category';
import { useEffect, useState } from 'react';
import { MenuCategorySelect } from './MenuCategorySelect';
import { getProducts } from '@/services/products';
import { Product } from '@/types/Product';
import { MenuCard } from './MenuCard';
import { MenuProductDialog } from './dialogs/MenuProductDialog';
import { MenuCardSkeleton } from '../skeletons/MenuCardSkeleton';
import { TbCakeOff } from 'react-icons/tb';

export const MenuContainer = () => {
    const [currentCategory, setCurrentCategory] = useState<Category>();
    const [products, setProducts] = useState<Product[]>([]);
    const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);

    const handleGetProductsFromCategory = async () => {
        if (!currentCategory) return;

        setProducts([]);

        setLoading(true);
        const req = await getProducts(currentCategory.id);
        setLoading(false);

        setProducts(req);
    };

    useEffect(() => {
        handleGetProductsFromCategory();
    }, [currentCategory]);

    return (
        <div className="max-w-[1200px] mx-auto px-3 py-10 mt-[102px] lg:mt-[154px]">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold lg:text-3xl">
                    {currentCategory?.name}
                </div>
                <MenuCategorySelect onChange={setCurrentCategory} />
            </div>
            {loading && products.length === 0 && <MenuCardSkeleton />}
            {!loading && products.length > 0 && (
                <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
                    {products.map((product) => (
                        <MenuCard
                            product={product}
                            onClick={() => {
                                setCurrentProduct(product), setIsProductDialogOpen(true);
                            }}
                        />
                    ))}
                </div>
            )}
            {!loading && products.length === 0 && (
                <div className="flex flex-col justify-center items-center opacity-60 gap-5 my-20">
                    <TbCakeOff size={100} />
                    <div className="text-2xl font-bold text-center lg:text-4xl">
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
        </div>
    );
};
