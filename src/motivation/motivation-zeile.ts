
var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>
#motivation {
    margin-bottom: 25px;
    color: white;
    text-align:center;
}
</style>
<div id="motivation">

</div>
`

class MotivationZeile extends HTMLElement {
    constructor() {
        super()
        let root = this.attachShadow({mode: 'open'})
        root.append(template.content.cloneNode(true))
        let div = root.getElementById("motivation") as HTMLDivElement
        let message = ["Fit zu sein ist kein Ziel, es ist eine Lebenshaltung.", "Erfolg hat drei Buchstaben TUN" , "You cant spell challenge without challenge", "Das was dich nicht umbringt macht dich stärker" ,"Dein einziges Limit bist du","Verwandle Größe Schwierigkeit in kleine und kleinere in gar keine", "Am ende der Ausreden beginnt dein Leben" , "Wenn du ganz unten bist, führt der einzige weg nach oben", "IF IT DOESNT Challenge you, it doesn’t change you", "Es wird nicht leichter, sondern du wirst besser" , "Es ist egal wie langsam du vorankommst du überrundest noch jeden auf dem Sofa", "Wer nicht will findet ausreden wer will findet Wege "]
        let i = Math.floor(message.length * Math.random())
        div.innerText = message[i]
    }
}

customElements.define('motivation-zeile', MotivationZeile) 