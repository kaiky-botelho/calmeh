import React from "react";

interface HeaderProps {
    titulo: string;
    caminhos?: { nome: string; url: string }[];
}

export function Header({ titulo, caminhos }: HeaderProps) {
    return (
        <header className="w-full bg-[#D6DC82] py-6">
            <div className="flex  justify-between max-w-[1200px] mx-auto px-6">

                <h1 className="font-bold text-4xl text-gray-800">
                    {titulo}
                </h1>

                <nav className="mt-3">
                    <ul className="flex gap-6">
                        {caminhos?.map((caminho, index) => (
                            <li key={index}>
                                <a
                                    className="text-[#2d2d2d] hover:underline text-lg"
                                    href={caminho.url}
                                >
                                    {caminho.nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    );
}
