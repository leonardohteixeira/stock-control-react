import React, { useState } from 'react';
import axios from 'axios';

interface DadosApi {
  id: number;
  nome: string;
  // Adicione outras propriedades de acordo com a sua API
}

const App: React.FC = () => {
  const [dados, setDados] = useState<DadosApi[]>([]);

  const fetchData = () => {
    const apiUrl = 'https://localhost:7184/login';

    axios.get<DadosApi[]>(apiUrl)
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Buscar dados</button>
      {dados.length > 0 && (
        <ul>
          {dados.map((dado: DadosApi) => (
            <li key={dado.id}>{dado.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;