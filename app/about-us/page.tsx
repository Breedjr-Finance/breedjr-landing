import Footer from "@/components/navigation/Footer";
import Header from "./common/Header";
import Hero from "./common/Hero";
import Story from "./common/Story";
import Values from "./common/Values";

export default async function Home() {

  return (
    <>
      <Header>
        <Hero />
      </Header>

      <div
        className='container'
      >

        <Story />
        <Values />
      </div>

    </>

  );
}
