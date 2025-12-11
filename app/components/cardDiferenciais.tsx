import React from "react";

interface HeaderProps {
    icone?: string;
    titulo: string;
}

export function CardDiferenciais({ icone, titulo }: HeaderProps) {
    return (
        <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64">
            <div className="w-16 h-16 flex items-center justify-center rounded-full">
                <img src={icone} alt={titulo} className="w-8 h-8"/>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">{titulo}</h3>
        </div>
    );
}