import { supabase } from '@/lib/supabase';
import { Product } from '@/types/Product';

export const getProducts = async (category_id: number) => {
    const { data, error } = await supabase
        .from('products')
        .select()
        .eq('category_id', category_id)
        .order('id', { ascending: true });

    if (error) {
        throw new Error(error.message);
    }

    return data as Product[];
};

export const getStandoutsProducts = async () => {
    const { data, error } = await supabase
        .from('products')
        .select()
        .limit(4)
        .order('standout', { ascending: false })
        .order('id', { ascending: true });

    if (error) {
        throw new Error(error.message);
    }

    return data as Product[];
};
