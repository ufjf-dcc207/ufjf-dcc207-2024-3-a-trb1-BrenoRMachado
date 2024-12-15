import './App.css'
import Alimentos from './Componentes/Alimentos/Alimentos'
import { ReactNode } from "react";
import {ham1, ham2, ham3, ham4, ham5, ham6, ham7, ham8, ham9, ham10} from "./assets/index.ts"

type AlimentosTupleType = [string, string, string, number];

const ALIMENTOS: AlimentosTupleType[] = [
    [ham1,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    [ham2,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    [ham3,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    [ham4,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    [ham5,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    [ham6,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    [ham7,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    [ham8,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    [ham9,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
    [ham10,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.00],
];

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
