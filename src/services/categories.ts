import { supabase } from '@/lib/supabase';
import { Category } from '@/types/Category';

export const getCategories = async (): Promise<Category[]> => {
    const { data, error } = await supabase
        .from('categories')
        .select()
        .order('id', { ascending: true });

    if (error) {
        throw new Error(error.message);
    }

    return data as Category[];
};
