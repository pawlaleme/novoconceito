import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#BDBDBD] p-4">
            <div className="container mx-auto flex items-center justify-center">
                {/* Botão do Menu Hambúrguer para Telas Pequenas */}
                <button
                    className="red-text md:hidden mr-4"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                {/* Menu para Telas Grandes */}
                <ul className="hidden md:flex space-x-4 items-center ">
                    <li>
                        <Link to="/arquitetos" className="text-white hover:text-gray-400">Arquitetos</Link> {/* Atualizado para usar Link */}
                    </li>
                    <li>
                        <Link to="/produtos" className="text-white hover:text-gray-400">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/galeria" className="text-white hover:text-gray-400">Galeria</Link>
                    </li>
                    <li>
                        <Link to="/contato" className="text-white hover:text-gray-400">Contato</Link>
                    </li>
                </ul>

                {/* Menu Suspenso para Telas Pequenas */}
                <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg`}>
                    <li>
                        <Link to="/arquitetos" className="block px-4 py-2 hover:bg-gray-700">Arquitetos</Link> {/* Atualizado */}
                    </li>
                    <li>
                        <Link to="/produtos" className="block px-4 py-2 hover:bg-gray-700">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/galeria" className="block px-4 py-2 hover:bg-gray-700">Galeria</Link>
                    </li>
                    <li>
                        <Link to="/contato" className="block px-4 py-2 hover:bg-gray-700">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
