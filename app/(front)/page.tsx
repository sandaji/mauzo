/* eslint-disable @next/next/no-img-element */
import HeroSection from "@/components/hero/Hero";
import ProductItem from "@/components/products/ProductItem";
import productService from "@/lib/services/productService";
import { convertDocToObj } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "Mauzo",
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    "Nextjs, Server components, Next auth, daisyui, zustand",
};

export default async function Home() {
  const featuredProducts = await productService.getFeatured();
  const latestProducts = await productService.getLatest();
  return (
    <>
      <HeroSection />
      <h2 className="text-2xl py-2">Featured Products</h2>
      <div className="w-full carousel rounded-box mt-4 grid grid-cols-3 gap-4">
        {featuredProducts.map((product, index) => (
          <div
            key={product._id}
            id={`slide-${index}`}
            className="carousel-item relative"
          >
            <Link href={`/product/${product.slug}`}>
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src={product.image}
                  className="object-cover rounded-box"
                  alt={product.name}
                  width={300}
                  height={300}
                />
              </div>
            </Link>
            {(index === 0 || index === featuredProducts.length - 1) && (
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                {index === 0 && (
                  <a
                    href={`#slide-${featuredProducts.length - 1}`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                )}
                {index === featuredProducts.length - 1 && (
                  <a href={`#slide-0`} className="btn btn-circle mr-1">
                    ❯
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </>
  );
}
