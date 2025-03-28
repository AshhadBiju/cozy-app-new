"use client";
import { useState } from "react";
import Counter from "@components/Counter";
import Button from "@components/UIComponents/Button";
import ColorSelector from "@components/colorSelector";
import SocialMediaLinks from "@components/SocialMediaLinks";
import Icon from "@components/UIComponents/Icon";

export default function ProductDetails() {
  const [product, setProduct] = useState({
    name: "Meryl Lounge Chair",
    description:
      "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.",
    price: 149.99,
    rating: 4.6,
    reviews: 556,
  });

  return (
    <div className="w-full md:w-[33%]">
      <h2 className="text-[2.75rem] font-semibold mb-2">{product.name}</h2>
      <div className="flex flex-col md:flex-row justify-between mt-6 mb-12">
        <div>
          <span>$</span>
          {product.price}
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="text-yellow-500">★★★★★</div>
          <div className="text-gray-500">
            {product.rating} / 5.0 <span>({product.reviews})</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-base ">{product.description}</p>

      <ColorSelector />
      <div className="flex gap-6">
        <div>
          <Counter />
        </div>
        <Button
          buttonText="Add to Cart"
          onClick={() => alert("Item added to cart!")}
          className="w-40" //Any additional styles added here will override the core Button component
          buttonColors="primary"
          // Default size is md, so no need to specify if md
        />
      </div>
      <ul className="text-base flex list-disc gap-9 mt-8 mb-20">
        <li className="list-none">Free 3-5 day shipping</li>
        <li>Tool-free assembly</li>
        <li>30-day trial</li>
      </ul>
      <div className="flex justify-between">
        <Icon
          name={"before-like"}
          text="Add to wishlist"
          textClassName="text-primary"
        />
        <SocialMediaLinks />
      </div>
    </div>
  );
}
