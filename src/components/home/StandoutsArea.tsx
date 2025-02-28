import { getStandoutsProducts } from '@/services/products';
import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import { MenuCard } from '../menu/MenuCard';
import { MenuProductDialog } from '../menu/dialogs/MenuProductDialog';
import { motion } from 'framer-motion';
import { fadeInDown, fadeInUp } from '@/animations/fadeIn';
import { useInView } from 'react-intersection-observer';

export const StandOutsArea = () => {
    const [standOutsProducts, setStandOutsProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const handleOpenProductDialog = (product: Product) => {
        setSelectedProduct(product);
        setIsProductDialogOpen(true);
    };

    const handleGetStandoutsProducts = async () => {
        const req = await getStandoutsProducts();

        setStandOutsProducts(req);
    };

    useEffect(() => {
        handleGetStandoutsProducts();
    }, []);

    return (
        <div
            ref={ref}
            className="px-3 mb-5 py-16 max-w-[1430px] mx-auto border-b-4 border-dashed border-primary"
        >
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInDown}
                className="font-bold text-center text-3xl lg:text-4xl"
            >
                Sobremesas do Momento
            </motion.div>
            <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                className="mt-10 grid grid-cols-2  gap-5 lg:grid-cols-4"
            >
                {standOutsProducts.map((product, index) => (
                    <MenuCard
                        product={product}
                        onClick={handleOpenProductDialog}
                        key={index}
                    />
                ))}
            </motion.div>
            {selectedProduct && (
                <MenuProductDialog
                    isOpen={isProductDialogOpen}
                    onOpenChange={setIsProductDialogOpen}
                    product={selectedProduct}
                />
            )}
        </div>
    );
};
