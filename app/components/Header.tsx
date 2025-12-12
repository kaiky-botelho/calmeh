"use client";
import React, { useState } from "react";

interface HeaderProps {
    titulo: string;
    caminhos?: { nome: string; url: string }[];
}

export function Header({ titulo, caminhos }: HeaderProps) {
    const [menuAberto, setMenuAberto] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        if (url.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(url);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setMenuAberto(false);
            }
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-[#D6DC82] py-4 sm:py-6 shadow-md z-50">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4 sm:px-6">
                
                <a href="/" className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 hover:text-[#90993e] transition-colors">
                    {titulo}
                </a>

                {/* Menu Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6">
                        {caminhos?.map((caminho, index) => (
                            <li key={index}>
                                <a
                                    className="text-[#2d2d2d] hover:text-[#90993e] hover:underline text-lg font-medium transition-colors cursor-pointer"
                                    href={caminho.url}
                                    onClick={(e) => handleClick(e, caminho.url)}
                                >
                                    {caminho.nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botão Menu Mobile */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label="Menu"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuAberto ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu Mobile */}
            {menuAberto && (
                <nav className="md:hidden bg-[#c9d06f] border-t border-[#90993e]/20">
                    <ul className="flex flex-col py-4">
                        {caminhos?.map((caminho, index) => (
                            <li key={index}>
                                <a
                                    className="block px-6 py-3 text-[#2d2d2d] hover:bg-[#90993e]/10 hover:text-[#90993e] text-lg font-medium transition-colors cursor-pointer"
                                    href={caminho.url}
                                    onClick={(e) => handleClick(e, caminho.url)}
                                >
                                    {caminho.nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
