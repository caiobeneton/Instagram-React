import react from 'react'
import cat from './img/catanacomics.svg'

function NovoUser(props) {

    const [img, setImg] = react.useState(props.imagem)
    const [user, setUser] = react.useState(props.user)
    const [nome, setNome] = react.useState(props.nome)

    function trocaUser() {
        setNome(prompt('Diga seu nome'))
        setUser(prompt('Diga seu usuário'))
    }

    return (
        <div class="usuario">
            <img onClick={() => setImg(prompt("Diga a URL da sua imagem"))} src={img} />
            <div class="texto">
                <strong>{user}</strong>
                <span>
                    {nome}
                    <ion-icon onClick={trocaUser} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function Usuario() {
    return (
        <NovoUser imagem={cat} user={'catanacomics'} nome={'Catana'}></NovoUser>
    )
}