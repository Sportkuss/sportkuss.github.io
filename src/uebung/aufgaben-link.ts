
var template = document.createElement("template")
template.innerHTML =
`
<style>
a {
    color: white;
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border-radius: 30px;
    margin-top: 20px;
    height: 50px;
    width: 120px;
    text-decoration: none;
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
  </style>
<div id="buttonlink">
    <button id="copyurl">Kopieren</button>
    <a id="link"> </a>
  </div>
`
class AufgabenLink extends HTMLElement{
    _selected: Set<number> = new Set();
    set selected(v: Set<number> ){
        this._selected = v;
        let root = this.shadowRoot;
        let link = root.getElementById("link") as HTMLAnchorElement

        let url = new URL("/aufgabe/", window.location.href);
        url.searchParams.set("uebungen", [...this._selected].join(","))
        link.href = url.href;
        link.innerText = url.href

        let copy = root.getElementById("copyurl") as HTMLButtonElement
   
        copy.addEventListener("click", () => {
          let selection = window.getSelection()
          
          selection.selectAllChildren(link)
          document.execCommand("copy")
          
        });
    }
    constructor(){
        super()
        let root = this.attachShadow({mode : 'open'})
        root.appendChild(template.content.cloneNode(true))
        
    
    }
}
customElements.define("aufgaben-link", AufgabenLink)