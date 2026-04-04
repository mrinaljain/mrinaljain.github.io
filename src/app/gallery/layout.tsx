import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout(props: {
   modal: React.ReactNode;
   children: React.ReactNode;
}) {
   return (
      <>
         <Header />
         <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50">
            {props.children}
         </div>
         <Footer />
         {props.modal}
      </>
   );
}