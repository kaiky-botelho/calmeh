import Diferencias from "./pages/diferencias";
import Inicio from "./pages/inicio";
import NossaHistoria from "./pages/nossaHistoria";
import Produtos from "./pages/produtos";

export default function Page() {
  return (
    <div>
      <Inicio />
      <Diferencias  />
      <NossaHistoria  />
      <Produtos />
    </div>
  );
}
