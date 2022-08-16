
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
        let message = ["Fit zu sein ist kein Ziel, es ist eine Lebenshaltung.", "Erfolg hat drei Buchstaben TUN" , "You cant spell challenge without challenge"]
        let i = Math.floor(message.length * Math.random())
        div.innerText = message[i]
    }
}

customElements.define('motivation-zeile', MotivationZeile) 