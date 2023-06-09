import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BiShoppingBag } from "react-icons/bi";
import {
  Form
} from '@remix-run/react';

import { createClient } from "~/utils/client";
import { formatPrice } from "~/utils/prices";
import type { ActionArgs, LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { createCartCookie, getCartCookie } from "~/data/cart.server"


const client = createClient();

export const loader = async ({ params }: LoaderArgs) => {
  const { product } = await client.products.retrieve(params.productId);
  return json(product);
};

export async function action({ params ,request }: ActionArgs) {

  let cartId = await getCartCookie(request)
  
  let headers = new Headers();

  // if no cart cookie, create the cookie
  if(!cartId) {
    const response = await createCartCookie(request)
    cartId = response.cartId

    headers = new Headers({
      ...response.headers,
    });
  }
  
  const { product } = await client.products.retrieve(params.productId);
  const variant_id = product.variants[0].id

  const { cart } = await client.carts.lineItems.create(cartId, {
      variant_id,
      quantity: 1,
    })

  return json(cart.items, {
    headers,
  });
};

export default function ProductRoute() {
  const product = useLoaderData();
  const [variant, setVariant] = useState(product.variants[0]);
  const [image, setImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);


  const handleVariantChange = (index: number) => {
    setVariant(product.variants[index]);
    setQuantity(1);
  };

  const handleQuantityChange = (action: string) => {
    switch (action) {
      case "inc":
        if (quantity < variant.inventory_quantity) 
          setQuantity(quantity + 1);
        break;

      case "dec":
        if (quantity > 1) setQuantity(quantity - 1);
        break;

      default:
        break;
    }
  };

  const handleImageChange = (id:number) => {
    setImage(product.images.find((img) => img.id === id));
  };

  return (
    <div className="w-full">
      <div className="grid items-center md:grid-cols-2">
        <div>
          <img
            className="w-full rounded-lg"
            src={image.url}
            alt={product.title}
          />
          <div className="flex justify-center p-4 space-x-2">
            {product.images.map((imageItem) => (
              <img
                className={`w-16 border-2 rounded-lg ${
                  imageItem.id === image.id ? "border-teal-400" :      null
                }`}
                key={imageItem.id}
                src={imageItem.url}
                alt={product.title}
                onClick={() => handleImageChange(imageItem.id)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col px-16 py-4 space-y-8">
          <h1>{product.title} </h1>
          <p className="font-semibold text-teal-600">{formatPrice(variant)}</p>
          {/* <div>
            <p className="font-semibold">Select Size</p>
            <div className="grid grid-cols-3 gap-2 mt-2 md:grid-cols-2 xl:grid-cols-4">
              {product.variants.map((variantItem, index) => (
                <button
                  key={variantItem.id}
                  className={`px-2 py-1 mr-2 text-sm hover:brightness-90 ${
                    variantItem.id === variant.id
                      ? "bg-gray-700 text-gray-100"
                      : "bg-gray-300 text-gray-700"
                  }`}
                  onClick={() => handleVariantChange(index)}
                >
                  {variantItem.title}
                </button>
              ))}
            </div>
          </div> */}
          <div>
            <p className="font-semibold">Select Quantity</p>
            <div className="flex items-center px-4 mt-2 space-x-4">
              <button
                className="px-4 py-2 hover:shadow-sm hover:text-teal-500 hover:font-bold"
                onClick={() => handleQuantityChange("dec")}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-4 py-2 hover:shadow-sm hover:text-teal-500 hover:font-bold"
                onClick={() => handleQuantityChange("inc")}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <Form method="post">
              {/* <input type="text" name="title" /> */}
              <button type="submit" className="inline-flex items-center px-4 py-2 font-semibold text-gray-200 bg-gray-700 rounded hover:text-white hover:bg-gray-900">
                <BiShoppingBag className="mr-2 text-lg" />{" "}
                <span>Add to Cart</span>
              </button>
            </Form>
          </div>
          <div>
            <p className="font-semibold">Product Description</p>
            <hr className="w-2/3 mt-2 border-t-2 border-gray-300" />
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}