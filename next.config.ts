import { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений для GitHub Pages
  },
  basePath: "/rmd", // Должно совпадать с названием репозитория
  assetPrefix: "/rmd/", // Добавляем слеш в конце, чтобы избежать проблем с загрузкой ассетов
  trailingSlash: true, // Генерирует `index.html` в каждой папке
};

export default config;
