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

    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

    return sortedData as Category[];
};
