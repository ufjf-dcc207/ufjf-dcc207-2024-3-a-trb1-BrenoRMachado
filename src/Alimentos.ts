import {ham1, ham2, ham3, ham4, ham5, ham6, ham7, ham8, ham9, ham10} from "./assets/index.ts"

type AlimentosTupleType = [string, string, string, number];

const ALIMENTOS: AlimentosTupleType[] = [
    [ham1,"Pão","Farinha de trigo, sal, fermento, manteiga e gergelim",5.00],
    [ham2,"Duble Onion Cheddar","Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",23.50],
    [ham3,"Special Burguer","Pão, bife tamanho gg, queijo, alface, tomate e molho especial.",29.90],
    [ham4,"SweetBurguer","Pão, Nutella, pedaços de morango e açúcar.",35.50],
    [ham5,"Sushiburguer","Arroz prensado, salmão,alga, cream cheese e wasabi", 45.50],
    [ham6,"V-Gano","Pão de alface, bife de soja, rúcula, cebola roxa e picles.",32.00],
    [ham7,"X-gato","Pão felino, bife felino, queijo, picles e muito miau.",25.90],
    [ham8,"Hamburguer de Siri","Pão, ingrediente secreto, alface, tomate, cebola e queijo.",42.00],
    [ham9,"Cheespider","Hamburguer vivo feito de pão, bife, salada e molhos",540.00],
    [ham10,"Bulburguer","Bulbassauro burguer vivo com o X-burguer em suas costas.",95.50],
];

export default ALIMENTOS;