import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
};

const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/bodafelipeypamela' : '';

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.map(img => ({
  ...img,
  imageUrl: img.imageUrl.startsWith('/') ? `${prefix}${img.imageUrl}` : img.imageUrl
}));
