import React from "react";
import "./Paginado.css";

export default function Paginado({ countriesPerPage, countries, paginado, currentPage }) {
    const pageNumbers = [];
    const totalPages = Math.ceil(countries / countriesPerPage);
    console.log(totalPages);
    if (totalPages <= 3) {
        // Mostrar todos los números de página si hay 3 o menos
        for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i + 1);
        }
    } else {
        // Mostrar solo 3 números de página
        if (currentPage === 1) {
        // Página actual es 1
        pageNumbers.push(1, 2, 3);
        } else if (currentPage === totalPages) {
        // Página actual es la última
        pageNumbers.push(currentPage - 2, currentPage - 1, currentPage);
        } else {
        // Página actual está en el medio
        pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
        }
    }

    const goToPrevPage = () => {
        if (currentPage > 1) {
        paginado(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
        paginado(currentPage + 1);
        }
    };
    
    return (
        <nav>
        <ul className="ul">
            <li>
            <button
                className="button-prev"
                onClick={goToPrevPage}
                disabled={currentPage === 1}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="4 4 24 24" fill="currentColor" stroke-width="2" class="ai ai-TriangleLeftFill"><path d="M16 6a1 1 0 0 0-1.6-.8l-8 6a1 1 0 0 0 0 1.6l8 6A1 1 0 0 0 16 18V6z"/></svg>
            </button>
            </li>
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
            <li>
            <button
                className="button-next"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="4 4 24 24" fill="currentColor" stroke-width="2" class="ai ai-TriangleRightFill"><path d="M8 6a1 1 0 0 1 1.6-.8l8 6a1 1 0 0 1 0 1.6l-8 6A1 1 0 0 1 8 18V6z"/></svg>
            </button>
            </li>
        </ul>
        </nav>
    );
}
