import Content from "./common/Content";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";


export default async function TermsOfService() {

  return (
    <>
      <Navbar />

      <main className='container px-4 lg:px-12'>
        <Content />
      </main>
      <Footer />
    </>
  );
}
