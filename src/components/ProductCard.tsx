import { useState } from "react";

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, category, title, price }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);
  const addToCartBtn = (
    <button
      onClick={() => setQuantity(1)}
      className="w-44 flex gap-2 items-center justify-center cursor-pointer border border-[#C93A0D] bg-white rounded-[20px] absolute bottom-0 translate-y-1/2 left-2/4 -translate-x-1/2 px-6 py-3"
    >
      <img src="/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
      <span>Add to Cart</span>
    </button>
  );
  const quantityBtn = (
    <div className="w-44 flex gap-2 items-center justify-around text-white border border-[#C93A0D]  bg-[#C93A0D] rounded-[20px] absolute bottom-0 translate-y-1/2 left-2/4 -translate-x-1/2 px-6 py-3">
      <button
        className="rounded-[50%] border w-6 cursor-pointer"
        onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
      >
        –
      </button>
      <span>{quantity}</span>
      <button
        className="rounded-[50%] border w-6 cursor-pointer"
        onClick={() => setQuantity((prev) => (prev += 1))}
      >
        +
      </button>
    </div>
  );

  return (
    <div>
      <div className="relative">
        <img src={image} alt="Product image" className="w-full rounded-md" />
        {quantity === 0 ? addToCartBtn : quantityBtn}
      </div>
      <div className="product-info flex flex-col gap-1 mt-2">
        <span className="text-[#8A7B78]">{category}</span>
        <h4>{title}</h4>
        <span className="text-[#8C3615]">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
