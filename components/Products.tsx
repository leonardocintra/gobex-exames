import Image from "next/image";
import { IProduct } from "../interfaces/IProduct";

interface ProductsProps {
  products: IProduct[];
}

export default function Products(props: ProductsProps) {
  function handleImage(product: IProduct) {
    return (
      <Image
        src={product.imageUrl}
        width={814}
        height={830}
        alt={product.title}
        className="object-cover object-center rounded-lg"
      />
    );
  }

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {props.products.map((product, index) => (
        <div
          key={`id-${index}`}
          className="text-gray-600 flex justify-center"
        >
          {handleImage(product)}
        </div>
      ))}
    </div>
  );
}
