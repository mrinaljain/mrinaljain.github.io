interface PageParams {
   slug: string;
}

interface PageProps {
   params: PageParams;
}


export async function generateMetadata({ params }: PageProps) {
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


const Page = async ({ params,
}: PageProps) => {
   // const { slug } = await params;
   return <div>My Post: {params.slug}</div>
}


export default Page;