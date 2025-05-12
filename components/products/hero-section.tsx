import React from 'react';

interface ProductsHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const ProductsHero: React.FC<ProductsHeroProps> = ({
  title = 'Our Products',
  subtitle = 'Innovative Solutions for Modern Challenges',
  description = 'Discover our comprehensive suite of products designed to transform your business and drive success.'
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            {title}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300">
            {subtitle}
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;