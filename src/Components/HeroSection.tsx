// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
    return (
        // Usa a classe personalizada 'hero-gradient'
        <section className="hero-gradient text-white py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparência Legislativa com IA</h1>
                    <p className="text-xl mb-8 opacity-90">Acompanhe projetos de lei, votos de vereadores e o andamento legislativo de forma simples e transparente.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <input type="text" placeholder="Buscar projetos, vereadores..." className="px-6 py-3 rounded-lg text-gray-800 flex-grow max-w-md" />
                        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all">
                            <i className="fas fa-search mr-2"></i> Buscar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;