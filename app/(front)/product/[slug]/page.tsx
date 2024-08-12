import AddToCart from "@/components/products/AddToCart";
import { convertDocToObj } from "@/lib/utils";
import productService from "@/lib/services/productService";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "@/components/products/Rating";
import { TiArrowBackOutline } from "react-icons/ti";
import { Metadata } from "next";

interface ProductDetailsProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ProductDetailsProps): Promise<Metadata> {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="my-2">
        <Link href="/" className="flex items-center">
          <TiArrowBackOutline className="mr-2 text-violet-400" />
          <span>Back to Home</span>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={320}
            sizes="50vw"
            className="w-1/2 h-auto"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-xl">{product.name}</h1>
          <Rating
            value={product.rating}
            caption={`${product.numReviews} reviews`}
          />
          <div>Brand: {product.brand}</div>
          <div className="divider"></div>
          <div>
            <span className="font-bold">Description:</span>{" "}
            <p>{product.description}</p>
          </div>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>KSH {product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? "In stock" : "Unavailable"}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: "",
                      size: "",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
