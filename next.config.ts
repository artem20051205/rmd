import { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений для GitHub Pages
  },
  basePath: "/rmd",  // Задай имя своего репозитория
  assetPrefix: "/rmd", // Тоже укажи имя репозитория
};

export default config;
