import React from "react";

interface HeaderProps {
    icone: React.ReactNode;
    titulo: string;
}

export function CardDiferenciais({ icone, titulo }: HeaderProps) {
    return (
        <div className="flex flex-col items-center gap-4 p-2 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full text-[#90993e]">
                {icone}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">{titulo}</h3>
        </div>
    );
}