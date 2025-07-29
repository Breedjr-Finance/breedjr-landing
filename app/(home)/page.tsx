
import Header from "@/app/(home)/common/Header";
import Experience from "./common/Experience";
import FAQ from "./common/FAQ";
import Hero from "./common/Hero";
import HowItWorks from "./common/HowitWorks";


export default async function Home() {

  return (
    <>
      <Header>
        <Hero />
      </Header>

      <HowItWorks />
      <Experience />
      <FAQ />

    </>
  );
}
