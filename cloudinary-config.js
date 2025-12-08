// Configuração de URLs Cloudinary (exemplo)
// Substitua pelos seus próprios uploads ou use variáveis de ambiente no build
const CLOUDINARY_BASE = 'https://res.cloudinary.com/demo/image/upload/v123/';

export const images = {
  hero: CLOUDINARY_BASE + 'hero-illustration.svg',
  powerbi: CLOUDINARY_BASE + 'powerbi-dashboard.jpg',
  nutri: CLOUDINARY_BASE + 'nutri-plan.jpg',
  saude: CLOUDINARY_BASE + 'saude-conecta.jpg',
  og: CLOUDINARY_BASE + 'og-image.jpg',
  fallback: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW0gSW5kaXNwb25pdmVsPC90ZXh0Pjwvc3ZnPg=='
};