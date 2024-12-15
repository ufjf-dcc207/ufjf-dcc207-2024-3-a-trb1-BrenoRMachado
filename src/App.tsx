import './App.css'
import Alimentos from './Componentes/Alimentos/Alimentos'
import { ReactNode } from "react";

type AlimentosTupleType = [string, string, number];

const ALIMENTOS: AlimentosTupleType[] = [
    ["Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    ["Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    ["Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
];

function App() {
  const comidas: ReactNode[] = ALIMENTOS.map((alimento) => (
    <Alimentos
      nome={alimento[0]}
      descricao={alimento[1]}
      preco={alimento[2]} 
    />  
));
  return (
    <div>
      {comidas}
    </div>
  )
}

export default App
