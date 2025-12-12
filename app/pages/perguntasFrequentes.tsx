import React from "react";
import { ItemFAQ } from "../components/ItemFAQ";

export default function PerguntasFrequentes() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-[#90993e]">
                Perguntas Frequentes
            </h1>
            <p className="text-base sm:text-lg mb-8 text-center text-gray-700">
                Tire suas dúvidas sobre nossos produtos artesanais e processo de compra
            </p>

            <div className="space-y-4">
                <ItemFAQ
                    pergunta="Os produtos são realmente artesanais?"
                    resposta="Sim! Todos os nossos produtos são feitos à mão por nossa equipe de artesãos, com ingredientes naturais cuidadosamente selecionados. Cada item recebe atenção especial em todas as etapas da produção."
                />

                <ItemFAQ
                    pergunta="Quanto tempo duram as velas aromáticas?"
                    resposta="Nossas velas têm durabilidade média de 40 a 60 horas, dependendo do tamanho e condições de uso. Recomendamos queimar por no máximo 3-4 horas por vez para melhor aproveitamento."
                />

                <ItemFAQ
                    pergunta="Os produtos são testados em animais?"
                    resposta="Não! Somos totalmente contra testes em animais. Todos os nossos produtos são cruelty-free e desenvolvidos com ingredientes naturais e seguros."
                />

                <ItemFAQ
                    pergunta="Como devo armazenar os produtos?"
                    resposta="Recomendamos armazenar em local fresco, seco e protegido da luz solar direta. As velas devem ser mantidas longe de fontes de calor, e os sabonetes em local arejado entre os usos."
                />

                <ItemFAQ
                    pergunta="Vocês fazem entregas para todo o Brasil?"
                    resposta="Sim! Realizamos entregas para todo o território nacional. Os custos e prazos de frete são calculados automaticamente no checkout de acordo com seu CEP."
                />
            </div>
        </div>
    );
}
