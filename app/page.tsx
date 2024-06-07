
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Products from "@/components/products/products";
import { productVariants, variantImages } from "@/server/schema";
import { db } from "@/server";
import Algolia from "@/components/products/algolia";
import ProductTags from "@/components/products/product-tags";

export const revalidate = 60 * 60;

export default async function Home() {

  const data = await db.query.productVariants.findMany({
    with:{
      variantImages: true,
      variantTags: true,
      product: true,
    },
    orderBy: (productVariants, {desc}) => [desc(productVariants.id)]
  })


  return (
    <main className="">
      <Algolia />
      {/* <ProductTags /> */}
      <Products variants = {data}/>
    </main>
  );
}

