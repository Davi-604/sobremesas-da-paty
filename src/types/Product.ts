export type Product = {
    id: number;
    name: string;
    description?: string;
    price?: number;
    thumb_image_url: string;
    extra_images_urls: string[];
    category_id: number;
};
