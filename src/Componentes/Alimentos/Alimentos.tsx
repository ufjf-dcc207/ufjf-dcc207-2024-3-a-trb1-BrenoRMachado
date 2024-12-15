import "./Alimentos.css"

interface AlimentosProps {
    imagem?: string;
    nome?: string;
    descricao?: string;
    preco?: number;
}

export default function Alimentos({
    imagem = "?",
    nome = "?",
    descricao = "?",
    preco = 0.0,

}: AlimentosProps){
    return (
        <div className="alimentos">
            <img src={imagem} alt="imagens das comidas" />
            <div className="nome">{nome}</div>
            <div className="descricao">{descricao}</div>
            <div className="preco">R$ {preco.toFixed(2)}</div>
        </div>
    );
}   