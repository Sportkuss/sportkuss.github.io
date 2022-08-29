var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>

#popup{
    background:rgba(0,0,0,.4);
    cursor:pointer;
    display:none;
    height:100%;
    position:fixed;
    text-align:center;
    top:0;
    width:100%;
    z-index:10000;
}
#popup .helper{
    display:inline-block;
    height:100%;
    vertical-align:middle;
}
#popup > div {
  background: linear-gradient(to right, #3a69cf, #13e0f3);
    box-shadow: 10px 10px 60px #555;
    display: inline-block;
    height: auto;
    max-width: 551px;
    min-height: 100px;
    vertical-align: middle;
    width: 100%;
    position: relative;
    border-radius: 8px;
}
#close {
    background-color: var(--app-red);
    border: 3px solid #999;
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    font-family: arial;
    font-weight: bold;
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 25px;
    line-height: 30px;
    width: 30px;
    height: 30px;
    text-align: center;
}
#close:hover {
    background-color: #ccc;
}
button {
    background-color: transparent;
    border-radius: 30px;
    height: 30px;
    width: 80px;
    border: 2px solid #b33d3d;
    position: relative;
    overflow: hidden;
  }
  button:hover {
    box-shadow: 1px 1px 10px 5px #b33d3d;
  }
  button:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      #b33d3d,
      transparent
    );
    transition: all 650ms;
  }
  button:hover:before {
    left: 100%;
  }
  #openbutton{
      margin: 20px;
  }
  br{
    display: block;
    margin-bottom: 1em;

  }
</style>
<button id="openbutton" >Info</button>

<div id="popup">
    <span class="helper"></span>
    <div>
        <div id="close" >&times;</div>
        <p>Kurze Erklärung<br />Übungen auswählen! <br />Auf den Link klicken und schwieigkeits level selbst wählen <br />Selber die Übungen machen oder deinem Freund oder Kollgen schicken <br /> Viel Spaß! </p>
    </div>
</div>

`
class Popup extends HTMLElement {
    constructor() {
        super()
        let root = this.attachShadow({mode: 'open'})
        root.append(template.content.cloneNode(true))

        let openbutton = this.shadowRoot.getElementById("openbutton") 
        let popup = this.shadowRoot.getElementById("popup")
        let close = this.shadowRoot.getElementById("close")

        openbutton.addEventListener('click', () => {
           
           popup.style.display = "block"
        });
        close.addEventListener('click', () => {
            popup.style.display = "none"
        });

    }
}

customElements.define('popup-ex', Popup) 