import React from "react";
import CardProdutos from "../components/cardProdutos";

export default function Produtos() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#90993e]">Nossos Produtos</h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">Aqui você encontrará uma variedade de produtos artesanais feitos com ingredientes naturais e muito carinho. Explore nossa coleção de velas aromáticas, difusores e outros itens que trazem bem-estar e beleza para o seu dia a dia.</p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <CardProdutos
                    imagem="/assets/produtos/SabonetsArtesanais.png"
                    titulo="Sabonetes"
                    descricao="Sabonetes artesanais feitos com ingredientes naturais para uma pele suave e hidratada."
                    beneficios={[
                        "Ingredientes naturais",
                        "Livre de químicos agressivos",
                        "Hidratação profunda"
                    ]}
                />

                <CardProdutos
                    imagem="/assets/produtos/VelasAromaticas.png"
                    titulo="Velas Aromáticas"
                    descricao="Velas artesanais que criam uma atmosfera acolhedora e relaxante em qualquer ambiente."
                    beneficios={[
                        "Aromas exclusivos",
                        "Feitas à mão",
                        "Durabilidade prolongada"
                    ]}
                />

                <CardProdutos
                    imagem="/assets/produtos/Difusores.png"
                    titulo="Difusores"
                    descricao="Difusores de aromas naturais que proporcionam bem-estar e frescor ao seu espaço."
                    beneficios={[
                        "Aromas naturais",
                        "Design elegante",
                        "Fácil de usar"
                    ]}
                />

                <CardProdutos
                    imagem="/assets/produtos/LoçãoCorporal.png"
                    titulo="Loção Corporal"
                    descricao="Loções corporais hidratantes feitas com ingredientes naturais para cuidar da sua pele."
                    beneficios={[
                        "Hidratação intensa",
                        "Ingredientes naturais",
                        "Textura leve e absorção rápida"
                    ]}
                />

                <CardProdutos
                    imagem="/assets/produtos/KitSpa.png"
                    titulo="Kit Spa"
                    descricao="Kit completo para um momento de spa em casa, com produtos naturais e relaxantes."
                    beneficios={[
                        "Inclui sabonete, vela e loção",
                        "Ingredientes naturais",
                        "Perfeito para relaxar"
                    ]}
                />
            </div>
        </div>
    )
}