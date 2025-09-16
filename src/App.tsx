// src/App.jsx

import './App.css';
// import votacoesData from './dados_votacoes.json';

// Passo 1: Importe o componente Header que você criou
import Header from './components/header/header'; // Certifique-se que o caminho está correto

// (O tipo 'Votacao' continua o mesmo)
// type Votacao = {
//   data_votacao: string;
//   objeto_da_votacao: string;
//   projetos_relacionados: string[];
//   resumo: string;
//   resultado: string;
//   votos: {
//     vereador: string;
//     voto: string;
//   }[];
// };

function App() {
  // const dadosDasVotacoes: Votacao[] = votacoesData;

  return (
    // Usamos um Fragment (<>...</>) para agrupar o Header e o resto do conteúdo
    // sem adicionar um <div> extra desnecessário no HTML final.
    <>
      {/* <div className="App">
        <main>
          <h2>Votações da Sessão de {dadosDasVotacoes[0]?.data_votacao}</h2>
          
          {dadosDasVotacoes.map((votacao, index) => (
            <div key={index} className="votacao-card">
              <h3>{votacao.objeto_da_votacao}</h3>
              <p><strong>Projetos Relacionados:</strong> {votacao.projetos_relacionados.join(', ')}</p>
              <p><strong>Resumo:</strong> {votacao.resumo}</p>
              <p><strong>Resultado:</strong> <span className={`resultado ${votacao.resultado.toLowerCase()}`}>{votacao.resultado}</span></p>
            </div>
          ))}
        </main>
      </div> */}
    </>
  );
}

export default App;
