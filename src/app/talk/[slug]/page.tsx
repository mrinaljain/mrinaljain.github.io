import { Metadata } from "next";

type Props = {
   params: Promise<{ slug: string }>;
};


export async function generateMetadata({ params, }: Props): Promise<Metadata> {
   const pageSlug = (await params).slug;

   return {
      title: `#${pageSlug}`,
      description: `Talks with the tag ${pageSlug}`,
      openGraph: {
         title: `#${pageSlug}`,
         description: `Talks with the tag ${pageSlug}`,
         url: `https://mrinaljain.com/${pageSlug}`,
         siteName: "Mrinal Jain - Portfolio",
         type: "website",
         locale: "en_US",
      },
   }
}


const Page = async ({ params, }: Props) => {
   const pageslug = (await params).slug;
   return <div>My Post page : {pageslug}</div>;
};


export default Page;