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
        <div className="alimentos">
            <div className="nome">{nome}</div>
            <div className="descricao">{descricao}</div>
            <div className="preco">R$ {preco.toFixed(2)}</div>
        </div>
    );
}   