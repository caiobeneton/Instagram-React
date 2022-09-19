import gag from './img/9gag.svg'
import meow from './img/meowed.svg'
import barked from './img/barked.svg'
import planet from './img/nathanwpylestrangeplanet.svg'
import wawa from './img/wawawicomics.svg'
import responde from './img/respondeai.svg'
import filo from './img/filomoderna.svg'
import gourmet from './img/memeriagourmet.svg'

function Story(props) {
    return (
        <div class="story">
            <div className="imagem">
                <img src={props.imagem} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}

export default function Stories() {
    
    let storyContent = [
        {
            imagem: gag,
            user: '9gag'
        },
        {
            imagem: meow,
            user: 'meowed'
        },
        {
            imagem: barked,
            user: 'barked'
        },
        {
            imagem: planet,
            user: 'nathanwpylestrangeplanet'
        },
        {
            imagem: wawa,
            user: 'wawawicomics'
        },
        {
            imagem: responde,
            user: 'respondeai'
        },
        {
            imagem: filo,
            user: 'filomoderna'
        },
        {
            imagem: gourmet,
            user: 'memeriagourmet'
        }
    ]

    return (
        <div class="stories">
            
            {storyContent.map((s) => <Story imagem={s.imagem} user={s.user}></Story>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}