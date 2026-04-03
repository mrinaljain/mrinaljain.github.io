import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

type Props = {
   params: Promise<{ slug: string }>;
};


export async function generateMetadata({ params, }: Props): Promise<Metadata> {
   const pageSlug = (await params).slug;
   return createPageMetadata({
      title: `#${pageSlug}`,
      description: `Posts tagged with ${pageSlug}`,
      path: `/post/${pageSlug}`,
      type: "article",
   });
}

const Page = async ({ params, }: Props) => {
   const pageslug = (await params).slug;
   return <div>My Post page : {pageslug}</div>;
};

export default Page;
