import React from "react";
import "./Paginado.css";

export default function Paginado({ countriesPerPage, countries, paginado, currentPage }) {
    const pageNumbers = [];
    const totalPages = Math.ceil(countries / countriesPerPage);

    if (totalPages <= 3) {
        // Mostrar todos los números de página si hay 3 o menos
        for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i + 1);
        }
    } else {
        // Mostrar solo 3 números de página y agregar "Prev" y "Next"
        if (currentPage === 1) {
        // Página actual es 1
        pageNumbers.push(1, 2, 3,);
        } else if (currentPage === totalPages) {
        // Página actual es la última
        pageNumbers.push(currentPage - 2, currentPage - 1, currentPage);
        } else {
        // Página actual está en el medio
        pageNumbers.push( currentPage - 1, currentPage, currentPage + 1);
        }
    }

    return (
        <nav>
        <ul className="ul">
            {pageNumbers.map((n) => (
            <li key={n}>
                <button
                className={currentPage === n ? "container current" : "container"}
                onClick={() => paginado(n)}
                
                >
                {n}
                </button>
            </li>
            ))}
        </ul>
        </nav>
    );
}
