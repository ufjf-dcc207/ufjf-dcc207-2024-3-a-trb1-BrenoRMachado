import './App.css'
import Alimentos from './Componentes/Alimentos/Alimentos'
import { ReactNode } from "react";
import ALIMENTOS from './Alimentos';

function App() {
  const comidas: ReactNode[] = ALIMENTOS.map((alimento) => (
    <Alimentos
      imagem={alimento[0]}
      nome={alimento[1]}
      descricao={alimento[2]}
      preco={alimento[3]} 
    />  
));
  return (
    <div className='app'>
      <h1>CARDÁPIO</h1>
      <div className='menu'>
        {comidas}
      </div>
    </div>

  )
}

export default App
