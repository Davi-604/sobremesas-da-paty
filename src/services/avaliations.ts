import { supabase } from '@/lib/supabase';
import { Avaliation } from '@/types/Avaliation';

export const getAvaliations = async () => {
    const { data, error } = await supabase
        .from('avaliations')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        throw new Error(error.message);
    }

    return data as Avaliation[];
};
