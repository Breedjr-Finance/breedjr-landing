import Content from "./common/Content";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";


export default async function Home() {

  return (
    <div className="container">
      <Navbar />

      <main className='container'>
        <Content />
      </main>
      <Footer />
    </div>
  );
}
