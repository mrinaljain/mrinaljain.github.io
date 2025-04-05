import { Metadata } from "next"

type Props = {
   params: {
      slug: string
   }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
   // make api calls here and get page data  and use data in tag below

   return {
      title: `#${params.slug}`,
      description: `Talks with the tag ${params.slug}`,
      openGraph: {
         title: `#${params.slug}`,
         description: `Talks with the tag ${params.slug}`,
         url: `https://mrinaljain.com/${params.slug}`,
         siteName: "Mrinal Jain - Portfolio",
         type: "website",
         locale: "en_US",
      },
   }
}


const Page = async ({ params }: Props) => {
   return <div>My Post page : {params.slug}</div>
}


export default Page;