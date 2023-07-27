import { ProductCard, ProductCardProps } from "../molecules/ProductCard";

export type ProductListProps = {
  products: ProductCardProps[];
};

export const ProductList: React.FC<ProductListProps> = (props) => {
  const {products} = props;
  console.warn(products);
  const list = products.map((product) => 
    <div>
      <ProductCard {...product} />
    </div>
  )
  return (
    <ul> 
      {list}
    </ul>
  );
};