// src/components/ProjectList.js
import React from 'react';
import ProjectCard from './ProjectCard';

// Dados de exemplo para simular um fetch de API
const projectsData = [
    {
        id: 1,
        status: 'Em discussão',
        title: 'PL 1234/2023 - Regulamentação de Aplicativos de Transporte',
        date: '12/06/2023',
        summary: 'Este projeto busca estabelecer normas para operação de aplicativos de transporte na cidade, incluindo requisitos para motoristas, tarifas e seguro obrigatório. A proposta está em fase de discussão na comissão de mobilidade urbana.',
        tags: ['Mobilidade Urbana', 'Transporte', 'Regulamentação'],
        authorName: 'Vereador Carlos Silva',
        authorImg: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        id: 2,
        status: 'Aprovado',
        title: 'PL 987/2023 - Programa de Alimentação Escolar',
        date: '05/06/2023',
        summary: 'Ampliação do programa de alimentação escolar para incluir crianças de 0 a 3 anos em creches municipais. O projeto foi aprovado por 32 votos a 5 e agora aguarda sanção do prefeito. Orçamento previsto: R$ 2,5 milhões/ano.',
        tags: ['Educação', 'Assistência Social'],
        authorName: 'Vereadora Ana Oliveira',
        authorImg: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
];

function ProjectList() {
    return (
        <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Projetos em Destaque</h2>
            
            {projectsData.map(project => (
                <ProjectCard
                    key={project.id}
                    status={project.status}
                    title={project.title}
                    date={project.date}
                    summary={project.summary}
                    tags={project.tags}
                    authorName={project.authorName}
                    authorImg={project.authorImg}
                />
            ))}

            <div className="text-center mt-8">
                <button className="bg-white border border-blue-600 text-blue-600 font-medium px-6 py-2 rounded-lg hover:bg-blue-50 transition-all">
                    Carregar mais projetos
                </button>
            </div>
        </div>
    );
}

export default ProjectList;