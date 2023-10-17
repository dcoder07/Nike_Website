import Nav from "./components/Nav.jsx"
const App = () =>{
  return(
<main className="relative">
<Nav/>
  <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
  <section className="padding">PopularProducts</section>
  <section className="padding">Premium</section>
  <section className="padding padding-x py-10">Services</section>
  <section className="padding">SpecialOffers</section>
</main>
  );
}


export default App;