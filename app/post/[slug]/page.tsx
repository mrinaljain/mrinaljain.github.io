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
export async function generateStaticParams(): Promise<PageParams[]> {
   // Replace with real data fetch if needed
   return [
      { slug: "nextjs" },
      { slug: "typescript" },
      { slug: "flutter" },
   ];
}


const Page = async (props: PageProps) => {
   const { params } = props;

   return <div>My Post page : {params.slug}</div>
}


export default Page;