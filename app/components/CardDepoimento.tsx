import React from "react";

interface CardDepoimentoProps {
    nome: string;
    depoimento: string;
    avaliacao: number;
    foto?: string;
}

export function CardDepoimento({ nome, depoimento, avaliacao, foto }: CardDepoimentoProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#90993e] flex items-center justify-center text-white text-xl font-bold">
                    {foto ? (
                        <img src={foto} alt={nome} className="w-full h-full rounded-full object-cover" />
                    ) : (
                        nome.charAt(0).toUpperCase()
                    )}
                </div>
                <div>
                    <h3 className="font-bold text-gray-800">{nome}</h3>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={`text-lg ${
                                    i < avaliacao ? "text-[#90993e]" : "text-gray-300"
                                }`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed">"{depoimento}"</p>
        </div>
    );
}
