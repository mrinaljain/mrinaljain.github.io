import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({ params, }: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product with ${id}`)
    }, 3000);
  });

  return {
    title: `Product ${title}`
  }

}


async function ProductDetailPage({ params }: Props) {
  const productId = (await params).productId;

  return (
    <>
      <h1>Details about {productId}</h1>
      <div>ProductDetailPage</div>
    </>
  )
}

export default ProductDetailPage;