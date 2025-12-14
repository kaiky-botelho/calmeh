import React from "react";
import { Pill } from "../components/Pill";

export default function Inicio() {
    return (
        <main className="bg-[#FFF6EF] flex">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
                <div className="grid grid-cols-1 min-[840px]:grid-cols-2 gap-6 items-center">
                    <div>
                        <Pill texto="Feito à mão com amor e ingredientes naturais" />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">Bem-Estar e <br /> Beleza Artesanal</h1>
                        <p className="text-base sm:text-lg md:text-xl mt-4">Descubra o poder transformador dos nossos produtos artesanais. Cada vela, difusor e cosmético é cuidadosamente criado com ingredientes naturais para envolver seus sentidos e transformar sua rotina em momentos de puro bem-estar.</p>
                        <a 
                            href="#orcamento" 
                            className="inline-block mt-6 bg-[#b3be4c] hover:bg-[#9da842] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
                        >
                            Solicite um Orçamento
                        </a>
                    </div>
                    <div>
                        <img src="/assets/Vela.png" alt="Descrição da imagem" />
                    </div>
                </div>
            </div>
        </main>
    );
}