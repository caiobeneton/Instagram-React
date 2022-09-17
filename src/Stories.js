import gag from './img/9gag.svg'
import meow from './img/meowed.svg'
import barked from './img/barked.svg'
import planet from './img/nathanwpylestrangeplanet.svg'
import wawa from './img/wawawicomics.svg'
import responde from './img/respondeai.svg'
import filo from './img/filomoderna.svg'
import gourmet from './img/memeriagourmet.svg'

export default function Stories() {
    return (
        <div class="stories">
            <div class="story">
                <div className="imagem">
                    <img src={gag} />
                </div>
                <div class="usuario">
                    9gag
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={meow} />
                </div>
                <div class="usuario">
                    meowed
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={barked} />
                </div>
                <div class="usuario">
                    barked
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={planet} />
                </div>
                <div class="usuario">
                    nathanwpylestrangeplanet
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={wawa} />
                </div>
                <div class="usuario">
                    wawawicomics
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={responde} />
                </div>
                <div class="usuario">
                    respondeai
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={filo} />
                </div>
                <div class="usuario">
                    filomoderna
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={gourmet} />
                </div>
                <div class="usuario">
                    memeriagourmet
                </div>
            </div>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}