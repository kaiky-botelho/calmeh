import React from "react";
import { CardInfo } from "../components/CardInfo";

export default function NossaHistoria() {
    return (
        <main className="bg-[#FFF6EF] flex">
            <div className="max-w-6xl mx-auto px-6 py-20 text-xl">
                <div className="grid grid-cols-1 min-[840px]:grid-cols-2 gap-6 items-center">
                    <div className="text-xl">
                        <h1 className="text-5xl font-bold mb-6 col-span-2 text-[#90993e]">Nossa História</h1>
                        <p className="mb-4">
                            Desde 2018, acreditamos que pequenos detalhes fazem grandes diferenças. Por isso, criamos produtos artesanais que transformam ambientes e elevam experiências do dia a dia.
                        </p>
                        <p className="mb-4">
                            Nossa equipe de artesãos une técnicas tradicionais e inovação, escolhendo cuidadosamente cada ingrediente para garantir qualidade, bem-estar e respeito ao meio ambiente.
                        </p>
                        <p className="mb-4">
                            Mais do que produtos, oferecemos uma experiência sensorial completa: um convite para desacelerar, respirar fundo e aproveitar momentos de conexão com você mesmo e com quem você ama.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <CardInfo
                            titulo="Marcos"
                            itens={[
                                "Mais de 5 anos de história",
                                "Produção artesanal e sustentável",
                                "Presença em mais de 200 lojas",
                                "10k+ clientes felizes"
                            ]}
                        />

                        <CardInfo
                            titulo="Pilares"
                            itens={[
                                "Paixão – Cada produto é criado com amor e atenção aos detalhes.",
                                "Sustentabilidade – Ingredientes naturais e embalagens eco-friendly.",
                                "Qualidade – Padrões rigorosos em cada etapa da produção."
                            ]}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}