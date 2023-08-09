import ComentArea from "./Components/ComentArea";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Catalog from "./routes/Catalog";

function App() {
  return (
    <>
      <Header />

      <div className="title-catalog">
        <h2>Venha nos visitar</h2>       
      </div>

      <section>
        <Catalog />
      </section>
      
<section className="coments-section">

  <div className="title-coments">
    <h3>  O que estão dizendo</h3>
  </div>
  <ComentArea />
  <ComentArea />
  <ComentArea />
  <ComentArea />
  <ComentArea />
</section>

      <Footer />
    </>
  );
}

export default App;
