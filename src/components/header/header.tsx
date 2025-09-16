import React from 'react'; // Boa prática importar o React
import './Header.css'; // Importe o arquivo CSS correspondente

function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <div className="logo-container">
                    {/* Ícone do Font Awesome */}
                    <i className="fas fa-balance-scale logo-icon"></i>
                    <h1 className="site-title">Transparência Legislativa</h1>
                    <span className="ai-badge">AI</span>
                </div>
                <nav className="main-nav">
                    <a href="/" className="nav-link active">Início</a>
                    <a href="/projetos" className="nav-link">Projetos</a>
                    <a href="/vereadores" className="nav-link">Vereadores</a>
                    <a href="/sessoes" className="nav-link">Sessões</a>
                    <a href="/sobre" className="nav-link">Sobre</a>
                </nav>
                <button className="mobile-menu-button">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </header>
    );
}

export default Header; // Exporte o componente para poder usá-lo em outros arquivos
