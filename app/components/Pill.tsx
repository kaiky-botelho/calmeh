import React from "react";

interface PillProps {
    icone?: string;
    texto?: string;
}

export function Pill(props: PillProps) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border-4 border-amber-100 px-4 py-2">
            <span>
                <img src={props.icone} alt=""/>
            </span>
            <p className="text-sm font-bold">{props.texto}</p>
        </div>
    )   
};
