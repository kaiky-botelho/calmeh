import React from "react";

interface CardInfoProps {
    titulo: string;
    itens: string[];
}

export function CardInfo({ titulo, itens }: CardInfoProps) {
    return (
        <div className="bg-white border-l-4 border-[#90993e] p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-3 text-[#90993e]">{titulo}</h2>
            <ul className="space-y-2 text-base">
                {itens.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="text-[#90993e] mt-1">✓</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
