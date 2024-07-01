// import React from "react";
// import { slides } from "@/src/lib/slides";
// import Image from "next/image";

// export default function Products() {
//   return (
//     <main className="container mx-auto px-8 bg-white max-h-screen mt-[2rem] mb-[3rem]">
//       <h1 className="text-3xl font-bold mb-6">Products</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
//         {slides.map((product) => (
//           <div
//             key={product.productId}
//             className="border p-4 rounded-lg shadow-lg inline-block transform transition duration-400 ease-in-out hover:scale-105 cursor-pointer"
//           >
//             <Image
//               src={product.src}
//               alt={product.name}
//               productName={product.productName}
//               className="w-full h-fit object-cover rounded-lg mb-4 "
//             />
//             <h2 className="text-xl font-semibold mb-2">
//               {product.productName}
//             </h2>
//             <p className="text-gray-700 mb-2">{product.description}</p>
//             <p className="text-lg font-bold">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products); // Assuming the data structure contains a "products" array
      })

      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  return (
    <main className="container mx-auto px-8 bg-white max-h-screen mt-[2rem] mb-[3rem]">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id} // Assuming each product has an "id" field
            className="border p-4 rounded-lg shadow-lg inline-block transform transition duration-400 ease-in-out hover:scale-105 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <Image
              src={product.thumbnail}
              alt={product.name}
              productName={product.productName}
              width={24}
              height={24}
              className="w-full h-fit object-cover rounded-lg mb-4 "
            />
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
