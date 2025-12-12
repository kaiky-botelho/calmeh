import "./globals.css";
import { Header } from "./components/Header";

export const metadata = {
  title: "Sistema",
  description: "Next + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="h-full scroll-smooth">
      <body>
        <Header
          titulo="CALMÉH"
          caminhos={[
            { nome: "Início", url: "#inicio" },
            { nome: "Produtos", url: "#produtos" },
            { nome: "Nossa História", url: "#historia" },
            { nome: "Diferenciais", url: "#diferenciais" },
            { nome: "Depoimentos", url: "#depoimentos" },
            { nome: "FAQ", url: "#faq" },
          ]}
        />
        <main className="bg-[#FFF6EF]">
          {children}
        </main>
      </body>
    </html>
  );
}
