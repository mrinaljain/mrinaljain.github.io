// app/post/[slug]/page.tsx

type Props = {
   params: {
      slug: string
   }
}

export async function generateMetadata({ params }: Props) {
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

// ✅ FIXED HERE
const Page = async (props: Props) => {
   const { params } = props;
   return <div>My Post page : {params.slug}</div>;
};

export default Page;
