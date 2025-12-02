import data from "../store/data.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section>
      <h2 className="mb-2.5 font-bold text-[34px]">Desserts</h2>
      <div className="grid grid-cols-3 gap-2.5">
        {data.map((product) => (
          <ProductCard
            image={`/assets/images/${product.image.desktop}`}
            category={product.category}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
