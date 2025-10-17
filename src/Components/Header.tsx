// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-balance-scale text-blue-600 text-2xl"></i>
                    <h1 className="text-xl font-bold text-gray-800">Transparência Legislativa</h1>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ml-2">AI</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-blue-600 font-medium">Início</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Projetos</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Vereadores</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Sessões</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Sobre</a>
                </nav>
                <button className="md:hidden text-gray-600">
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </div>
        </header>
    );
}

export default Header;