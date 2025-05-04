export default function ProductDetailLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         {children}
         <h3>Nested Layout inside main layout for product deytail</h3>
      </>
   );
}