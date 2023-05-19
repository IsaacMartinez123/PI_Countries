import React from "react";
import "./Paginado.css";

export default function Paginado({ countriesPerPage, countries, paginado, currentPage }) {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(countries / countriesPerPage); i++) {
        pageNumbers.push(i + 1);
    }
    console.log(pageNumbers);
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