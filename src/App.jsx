import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import Popular from "./sections/Popular"
import Premium from "./sections/Premium"
const App = () =>{
  return(
<main className="relative">
<Nav/>
  <section className="xl:padding-1 wide:padding-r padding-b"><Hero/></section>
  <section className="padding"><Popular/></section>
  <section className="padding"><Premium/></section>
  <section className="padding padding-x py-10">Services</section>
  <section className="padding">SpecialOffers</section>
</main>
  );
}


export default App;