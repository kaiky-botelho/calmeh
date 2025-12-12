import React from "react";

interface ProdutosProps {
    imagem: string;
    titulo: string;
    descricao: string;
    beneficios: string[];
}

export default function CardProdutos({ imagem, titulo, descricao, beneficios }: ProdutosProps) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group w-full border border-[#B5BE63] sm:w-80 max-w-sm ">
            <div className="relative overflow-hidden h-64">
                <img 
                    src={imagem} 
                    alt={titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            
            <div className="p-6">
                <h2 className="text-2xl font-bold text-[#90993e] mb-3">{titulo}</h2>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{descricao}</p>
                
                <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">Benefícios:</h3>
                    <ul className="space-y-2">
                        {beneficios.map((beneficio, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                                <span className="text-[#90993e] mt-0.5">✓</span>
                                <span className="text-gray-600">{beneficio}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}    
