import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Popular from "./sections/Popular";
import Premium from "./sections/Premium";
import Services from "./sections/Services";
import Offers from "./sections/Offers";
import Customer from "./sections/Customer";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <Popular />
      </section>
      <section className='padding'>
        <Premium />
      </section>
      <section className='padding padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <Offers />{" "}
      </section>
      <section>
        <Customer />
      </section>
      <section className='padding'>
        <Subscribe />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
