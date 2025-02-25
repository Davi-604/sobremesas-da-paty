import { Category } from '@/types/Category';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { useEffect, useState } from 'react';
import { getCategories } from '@/services/categories';

type Props = {
    onChange: (category: Category) => void;
};
export const MenuCategorySelect = ({ onChange }: Props) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategoryValue, setSelectedCategoryValue] = useState('');

    const handleGetCategories = async () => {
        const req = await getCategories();

        setCategories(req);
        setSelectedCategoryValue(req[0].value);
        onChange(req[0]);
    };

    const handleChangeCategory = (value: string) => {
        setSelectedCategoryValue(value);

        const selectedCategory = categories.find(
            (category) => category.name.toLowerCase() === value
        );

        selectedCategory ? onChange(selectedCategory) : false;
    };

    useEffect(() => {
        handleGetCategories();
    }, []);

    return (
        <Select
            value={selectedCategoryValue}
            onValueChange={(value) => handleChangeCategory(value)}
        >
            <SelectTrigger className="w-[130px] font-semibold lg:w-[200px]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="font-semibold">
                {categories.length <= 0 && (
                    <SelectItem value="empty" disabled>
                        Nenhuma categoria cadastrada
                    </SelectItem>
                )}
                {categories.map((category) => (
                    <SelectItem value={category.value} key={category.id}>
                        {category.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
