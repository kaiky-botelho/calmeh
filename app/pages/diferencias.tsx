import React from "react";
import { CardDiferenciais } from "../components/cardDiferenciais";

export default function Diferencias() {
    return (
        <div className="bg-[#D6DC82]">
            <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex flex-wrap gap-5 items-stretch justify-center">
                        <CardDiferenciais
                            titulo="Ingredientes Naturais"
                        />
                        <CardDiferenciais
                            titulo="Feito à Mão"
                        />
                        <CardDiferenciais
                            titulo="Sustentabilidade"
                        />
                        <CardDiferenciais
                            titulo="Aromas Exclusivos"
                        />
                    </div>

            </div>
        </div>

    );
}