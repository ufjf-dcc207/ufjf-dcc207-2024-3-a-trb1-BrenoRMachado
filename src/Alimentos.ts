import {
  ham1,
  ham2,
  ham3,
  ham4,
  ham5,
  ham6,
  ham7,
  ham8,
  ham9,
  ham10,
} from "./assets/index.ts";

type AlimentosTupleType = [string, string, string, number];

const ALIMENTOS: AlimentosTupleType[] = [
  [ham1, "Pão", "Farinha de trigo, sal, fermento, manteiga e gergelim", 5.0],
  [
    ham2,
    "Duble Onion Cheddar",
    "Pão, dupla carne bovina, aneis de cebola, cheddar e bacon.",
    23.5,
  ],
  [
    ham3,
    "Special Burguer",
    "Pão, bife tamanho gg, queijo, alface, tomate e molho especial.",
    29.9,
  ],
  [ham4, "SweetBurguer", "Pão, Nutella, pedaços de morango e açúcar sobre o pão.", 35.5],
  [
    ham5,
    "SushiBurguer",
    "Arroz prensado, salmão,alga, cream cheese e wasabi",
    45.5,
  ],
  [
    ham6,
    "V-Gano",
    "Pão de alface, bife de soja, rúcula, cebola roxa e picles.",
    32.0,
  ],
  [
    ham7,
    "X-Cat",
    "Pão felino, bife felino, queijo, picles e muito miau.",
    25.9,
  ],
  [
    ham8,
    "Hamburguer de Siri",
    "Pão, ingrediente secreto, alface, tomate, cebola e queijo.",
    42.0,
  ],
  [
    ham9,
    "Cheespider",
    "Hamburguer vivo feito de pão, bife, salada e molhos",
    540.0,
  ],
  [
    ham10,
    "Bulburguer",
    "Bulbassauro burguer vivo com o X-burguer em suas costas.",
    95.5,
  ],
];

export default ALIMENTOS;
