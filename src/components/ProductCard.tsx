interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, category, title, price }: ProductCardProps) => {
  return (
    <div>
      <img src={image} alt="Product image" className="w-full rounded-md" />
      <div className="product-info flex flex-col gap-1 mt-2">
        <span className="text-[#8A7B78]">{category}</span>
        <h4>{title}</h4>
        <span className="text-[#8C3615]">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
