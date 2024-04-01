import AddToCart from "@/components/products/AddToCart";
import { convertDocToObj } from "@/lib/utils";
import productService from "@/lib/services/productService";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "@/components/products/Rating";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="my-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>
        <div className="">
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} ratings`}
              />
            </li>
            <li> {product.brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <span className="font-bold ">Description:</span>{" "}
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card  bg-base-300 shadow-xl mt-3 md:mt-0">
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
          <div className="bg-base-200 card p-2 shadow-xl mt-0 md:mt-3 space-y-4">
            <h3 className="text-white mx-auto bg-base-400">REVIEWS</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              vitae quaerat molestiae, autem explicabo ipsa unde impedit, itaque
              eum laborum nesciunt, accusantium nemo hic nobis suscipit maiores
              doloremque! Cupiditate omnis atque dolor. Molestias voluptatem
              tenetur illo obcaecati. Voluptatem eum provident placeat odio
              nulla! Eveniet deserunt facilis voluptatum necessitatibus quidem,
              expedita esse eos praesentium voluptatibus consequatur rerum
              corporis animi reprehenderit nisi iure mollitia minus dolorum
              obcaecati. Velit rerum facilis enim alias quas veniam eius amet
              eos odio. Consectetur nisi exercitationem numquam sapiente et
              temporibus aspernatur vitae hic error, nostrum nesciunt!e!
              Cupiditate omnis atque dolor. Molestias voluptatem tenetur illo
              obcaecati. Voluptatem eum provident placeat odio nulla! Eveniet
              deserunt facilis voluptatum necessitatibus quidem, expedita esse
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
