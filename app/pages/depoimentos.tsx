import React from "react";
import { CardDepoimento } from "../components/CardDepoimento";

export default function Depoimentos() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-[#90993e]">Depoimentos</h1>
            <p className="text-base sm:text-lg mb-8 text-center max-w-3xl mx-auto">Veja o que nossos clientes têm a dizer sobre nossos produtos artesanais. Cada depoimento reflete a dedicação e o carinho que colocamos em cada item, proporcionando momentos de bem-estar e satisfação.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CardDepoimento
                    nome="Maria Silva"
                    avaliacao={5}
                    depoimento="As velas aromáticas são simplesmente maravilhosas! O aroma se espalha por toda a casa e dura horas. Compro sempre!"
                />
                <CardDepoimento
                    nome="João Pedro"
                    avaliacao={5}
                    depoimento="Produtos de qualidade excepcional. Os sabonetes naturais deixaram minha pele muito mais macia e hidratada."
                />
                <CardDepoimento
                    nome="Ana Costa"
                    avaliacao={4}
                    depoimento="Adorei o kit spa! Foi um presente perfeito. A embalagem é linda e os produtos são incríveis."
                />
                <CardDepoimento
                    nome="Carlos Mendes"
                    avaliacao={5}
                    depoimento="Os difusores são perfeitos para o ambiente de trabalho. Aromas suaves que ajudam na concentração."
                />
                <CardDepoimento
                    nome="Beatriz Lima"
                    avaliacao={5}
                    depoimento="Fiquei impressionada com o cuidado em cada detalhe. Produtos artesanais de verdade, feitos com amor!"
                />
                <CardDepoimento
                    nome="Roberto Alves"
                    avaliacao={5}
                    depoimento="A loção corporal tem uma textura incrível e absorve rapidamente. Sinto minha pele muito mais hidratada!"
                />
            </div>
        </div>
    );
}