interface PageParams {
   slug: string;
}

interface PageProps {
   params: PageParams;
}

export async function generateMetadata({ params }: PageProps) {
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


const page = async ({ params,
}: PageProps) => {
   // const { slug } = await params;
   return <div>My Post page : {params.slug}</div>
}


export default page;