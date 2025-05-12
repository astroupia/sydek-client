import React from 'react';
import ProductCard, { ProductCardProps } from './product-card';

interface ProductGridProps {
  products: Omit<ProductCardProps, 'onCtaClick'>[];
  onProductClick?: (productIndex: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onCtaClick={() => onProductClick?.(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;