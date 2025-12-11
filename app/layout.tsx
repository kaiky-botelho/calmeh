import "./globals.css";
import { Header } from "./components/Header";

export const metadata = {
  title: "Sistema",
  description: "Next + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="h-full">
      <body>
        <Header
          titulo="CALMÉH"
          caminhos={[
            { nome: "Home", url: "/" },
            { nome: "Sobre", url: "/sobre" },
          ]}
        />
        <main className="bg-[#FFF6EF]">
          {children}
        </main>
      </body>
    </html>
  );
}
