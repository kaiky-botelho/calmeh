import React from "react";
import { Pill } from "../components/Pill";

export default function Inicio() {
    return (
        <main className="bg-[#FFF6EF] flex">
            <div className="max-w-6xl mx-auto px-6 py-10 text-xl">
                <div className="grid grid-cols-2 gap-4 items-start">
                    <div>
                        <Pill texto="Feito à mão com amor e ingredientes naturais" />
                        <h1 className="text-6xl font-bold mt-4">Bem-Estar e <br /> Beleza Artesanal</h1>
                        <p className="text-xl mt-4">Velas aromáticas, difusores e produtos naturais que transformam sua casa em um refúgio de tranquilidade e sofisticação.</p>
                    </div>
                    <div>
                        <img src="/assets/Vela.png" alt="Descrição da imagem" />
                    </div>
                </div>
            </div>
        </main>
    );
}