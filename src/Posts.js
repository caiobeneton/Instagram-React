import react from 'react'
import meow from './img/meowed.svg'
import tel from './img/gato-telefone.svg'
import responde from './img/respondeai.svg'
import barked from './img/barked.svg'
import dog from './img/dog.svg'
import adorable from './img/adorable_animals.svg'

function Post(props) {

    const [salvar, setSalvar] = react.useState('bookmark-outline')
    const [curtida, setCurtida] = react.useState('heart-outline')
    const [total, setTotal] = react.useState(props.numCurtidas)
    const [red, setRed] = react.useState('')

    function salvarIcone(){
        if (salvar === 'bookmark-outline') {
            setSalvar('bookmark')
        } else {
            setSalvar('bookmark-outline')
        }
    }
    function curtir(){
        if (curtida === 'heart-outline') {
            setCurtida('heart')
            setTotal(total + 1)
            setRed('heart')
        } else {
            setCurtida('heart-outline')
            setTotal(total - 1)
            setRed('')
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={curtir} src={props.conteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={red} onClick={curtir} name={curtida}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvarIcone} name={salvar}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtida} />
                    <div class="texto">
                        <p>Curtido por <b>{props.texto}</b> e outras <b>{total}</b> pessoas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {

    let postsContent = [
        {
            imagem: meow,
            user: 'meowed',
            conteudo: tel,
            curtida: responde,
            texto: 'respondeai',
            numCurtidas: 101523
        },
        {
            imagem: barked,
            user: 'barked',
            conteudo: dog,
            curtida: adorable,
            texto: 'adorable_animals',
            numCurtidas: 99159
        }
    ]

    return (
        <div class="posts">
            {postsContent.map((p) => <Post imagem={p.imagem}
             user={p.user} conteudo={p.conteudo} curtida={p.curtida}
             texto={p.texto} numCurtidas={p.numCurtidas}></Post>)}
        </div>
    )
}