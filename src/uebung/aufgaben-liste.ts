import { defaultUebungen } from "./uebung";
var template = document.createElement("template")
template.innerHTML =
`
<style>
#ol{
  display: flex;
  flex-direction: column;
  gap: 30px 20px;
  margin: 30px;
  color: white;
  width: auto;
  height: auto;
  overflow: auto;
}
#content{
  font-size: 20px;
  color: white;
}
li{
  float: left;
  margin: 0 20px;
}
p{
  display:inline
  
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
  float: right;
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
<div class="container">

    <ol id="ol">
     </ol>
     <button id="back">
    Zurück
     </buuton>
      
     
  

      </div>
  </div>

`
function _li(text: string): HTMLParagraphElement {
    let p = document.createElement('p')
    p.innerText = text
    return p
    
  }
  function _lidetail(text: string, text2: string): HTMLParagraphElement{
    let p1 = document.createElement('p') ;
    let details = document.createElement('details')
    let sumary = document.createElement('summary')
    let p2 = document.createElement('p')
    sumary.innerText = text
    p2.innerText = text2
    details.appendChild(sumary)
    details.appendChild(p2)
    p1.appendChild(details)
    return p1
  }
 
class AufgabenList extends HTMLElement{
    _selected: Set<number> = new Set();
    set selected(v: Set<number> ){
        this._selected = v;
        let root = this.shadowRoot;
        let uebungen = defaultUebungen()
        let schwierigkeit;
        this._selected.forEach(function (value) {
            
           let u = uebungen[value - 1]
           
            let ol = root.getElementById("ol") as HTMLOListElement
            let li = document.createElement('li') ;
            
            schwierigkeit = " " +u.leicht.toString()+ ", " + u.mittel.toString() + ", " + u.schwer.toString() + "; "
            li.appendChild(_li(u.name))
            li.appendChild(_li(schwierigkeit))
            li.appendChild(_lidetail("Details", u.beschreibung.toString()))
            
            // allles mit p dann mit einem li appendchilde dann appendchilde ol und dann den body
           ol.appendChild(li)
        
        
        });
        let back = root.getElementById("back") as HTMLButtonElement
        
        
        back.addEventListener("click", () =>{
          window.location.href = '/';
        });
       
    }
    constructor(){
        super()
        let root = this.attachShadow({mode : 'open'})
        root.appendChild(template.content.cloneNode(true))
        
    
    }
}
customElements.define("aufgaben-liste", AufgabenList)