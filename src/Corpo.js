import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./Sidebar"

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories></Stories>

                <Posts></Posts>
            </div>

            <Sidebar></Sidebar>
        </div>
    )
}