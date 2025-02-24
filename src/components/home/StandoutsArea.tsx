import { getStandoutsProducts } from '@/services/products';
import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import { MenuCard } from '../menu/MenuCard';
import { ProductModal } from '../menu/dialogs/ProductModal';

export const StandOutsArea = () => {
    const [standOutsProducts, setStandOutsProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);

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
        <div className="px-3 mb-10 py-5 max-w-[1430px] mx-auto border-b-4 border-dashed border-primary">
            <h1 className="font-bold text-center text-3xl lg:text-4xl">
                Destaques do Momento
            </h1>
            <div className="mt-10 grid grid-cols-2 justify-center gap-5 lg:grid-cols-4">
                {standOutsProducts.map((product, index) => (
                    <MenuCard
                        product={product}
                        onClick={handleOpenProductDialog}
                        key={index}
                    />
                ))}
            </div>
            {selectedProduct && (
                <ProductModal
                    isOpen={isProductDialogOpen}
                    onOpenChange={setIsProductDialogOpen}
                    product={selectedProduct}
                />
            )}
        </div>
    );
};
