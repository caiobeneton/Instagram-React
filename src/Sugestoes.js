import bad from './img/bad.vibes.memes.svg'
import chibi from './img/chibirdart.svg'
import razoes from './img/razoesparaacreditar.svg'
import adorable from './img/adorable_animals.svg'
import small from './img/smallcutecats.svg'

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {

    const sugestoes = [
        {
            imagem: bad,
            nome: 'bad.vibes.memes'
        },
        {
            imagem: chibi,
            nome: 'chibirdart'
        },
        {
            imagem: razoes,
            nome: 'razoesparaacreditar'
        },
        {
            imagem: adorable,
            nome: 'adorable_animals'
        },
        {
            imagem: small,
            nome: 'smallcutecats'
        }
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((s) => <Sugestao imagem={s.imagem} nome={s.nome}></Sugestao>)}
        </div>
    )
}