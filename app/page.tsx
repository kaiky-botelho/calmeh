import Depoimentos from "./pages/depoimentos";
import Diferencias from "./pages/diferencias";
import Inicio from "./pages/inicio";
import NossaHistoria from "./pages/nossaHistoria";
import PerguntasFrequentes from "./pages/perguntasFrequentes";
import Produtos from "./pages/produtos";
import Orcamento from "./pages/orcamento";
import { Footer } from "./pages/Footer";

export default function Page() {
  return (
    <>
      <div className="pt-20">
        <section id="inicio">
          <Inicio />
        </section>
        <section id="diferenciais">
          <Diferencias />
        </section>
        <section id="historia">
          <NossaHistoria />
        </section>
        <section id="produtos">
          <Produtos />
        </section>
        <section id="depoimentos">
          <Depoimentos />
        </section>
        <section id="faq">
          <PerguntasFrequentes />
        </section>
        <section id="orcamento">
          <Orcamento />
        </section>
      </div>
      <Footer />
    </>
  );
}
