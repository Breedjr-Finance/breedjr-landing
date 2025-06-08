
import Header from "@/app/(home)/common/Header";
import Experience from "./common/Experience";
import FAQ from "./common/FAQ";
import Hero from "./common/Hero";
import HowItWorks from "./common/HowitWorks";

import Footer from "@/components/navigation/Footer";

export default async function Home() {

  return (
    <div className="container">
      <Header>
        <Hero />
      </Header>
      <main className='container'>
        <HowItWorks />
        <Experience />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
