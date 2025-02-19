import { supabase } from '@/lib/supabase';
import { WebsiteData } from '@/types/WebsiteData';

export const getWebsiteData = async () => {
    const { data, error } = await supabase.from('website').select('*').single();

    if (error) {
        throw new Error(error.message);
    }

    return data as WebsiteData;
};
