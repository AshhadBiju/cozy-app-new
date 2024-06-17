import React from "react";
import { slides } from "@/src/lib/slides";
import Image from "next/image";

export default function Products() {
  return (
    <main className="container mx-auto px-8 bg-white max-h-screen mt-[2rem] mb-[3rem]">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {slides.map((product) => (
          <div
            key={product.productId}
            className="border p-4 rounded-lg shadow-lg inline-block transform transition duration-400 ease-in-out hover:scale-105 cursor-pointer"
          >
            <Image
              src={product.src}
              alt={product.name}
              productName={product.productName}
              className="w-full h-fit object-cover rounded-lg mb-4 "
            />
            <h2 className="text-xl font-semibold mb-2">
              {product.productName}
            </h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
