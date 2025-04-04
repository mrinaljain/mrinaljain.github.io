
export async function generateMetadata({ params }: Params) {
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

interface Params {
   params: {
      slug: string;
   }
}
const page = async ({ params,
}: Params) => {
   // const { slug } = await params;
   return <div>My Post: {params.slug}</div>
}


export default page;