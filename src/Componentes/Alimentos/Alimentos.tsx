import "./Alimentos.css"

interface AlimentosProps {
    nome?: string;
    descricao?: string;
    preco?: number;
}

export default function Alimentos({
    nome = "?",
    descricao = "?",
    preco = 0.0,

}: AlimentosProps){
    return (
        <div>
            <div>{nome}</div>
            <div>{descricao}</div>
            <div>{preco}</div>
        </div>
    );
}   