"use client";
import React, { useState } from "react";

interface ItemFAQProps {
    pergunta: string;
    resposta: string;
}

export function ItemFAQ({ pergunta, resposta }: ItemFAQProps) {
    const [aberto, setAberto] = useState(false);

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
                onClick={() => setAberto(!aberto)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
            >
                <h3 className="font-semibold text-gray-800 text-lg">{pergunta}</h3>
                <span className={`text-[#90993e] text-2xl transition-transform ${aberto ? "rotate-45" : ""}`}>
                    +
                </span>
            </button>
            {aberto && (
                <div className="px-5 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">{resposta}</p>
                </div>
            )}
        </div>
    );
}
