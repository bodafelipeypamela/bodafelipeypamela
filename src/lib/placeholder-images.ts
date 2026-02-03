import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
};

// Fuente de verdad única para el prefijo de las imágenes
const isProd = process.env.NODE_ENV === 'production';
export const assetPrefix = isProd ? '/bodafelipeypamela' : '';

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.map(img => ({
  ...img,
  // Forzamos el prefijo solo si la ruta empieza con /
  imageUrl: (img.imageUrl.startsWith('/') && isProd) 
    ? `${assetPrefix}${img.imageUrl}` 
    : img.imageUrl
}));

// Helper útil para cualquier otra imagen manual
export function getAssetPath(path: string) {
  if (!path.startsWith('/')) return path;
  return isProd ? `${assetPrefix}${path}` : path;
}
