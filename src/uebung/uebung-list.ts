import { defaultUebungen } from "./uebung";

var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>


table{
  width:100%;
  table-layout: fixed;
}
 th{
  background-color: rgba(255,255,255,0.3);
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
}
td{
  
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 20px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
#content{
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
</style>
<div class="container">
<div id="content">
    <table cellpadding="0" cellspacing="0" border="0">

    <thead>
      <tr>
        <th></th>
        <th>Name:</th>
        <th>Leicht:</th>
        <th>Mittel:</th>
        <th>Schwer:</th>
      </tr>
    </thead>
      <tbody id="uebungentbody">
      </tbody>
    </table> 
    </div>
  </div>
</div>




`
function _td(text: string): HTMLTableDataCellElement {
  let td = document.createElement('td')
  td.innerText = text
  return td
}

class UebungList extends HTMLElement {
  selectedUebungen: Set<number> = new Set();
  constructor() {
    //eventlistener
    super()
    let root = this.attachShadow({ mode: 'open' })
    root.append(template.content.cloneNode(true))
    let uebungentbody = root.getElementById("uebungentbody") as HTMLTableSectionElement
    let uebungen = defaultUebungen()
    for (let i = 0; i < uebungen.length; i++) {
      let u = uebungen[i]
      let tr = document.createElement('tr') as HTMLTableRowElement;
      let checkbox = document.createElement('input')
      checkbox.type = "checkbox"
      let tdcheckbox = document.createElement('td')

      tdcheckbox.appendChild(checkbox)
      tr.appendChild(tdcheckbox)
      tr.appendChild(_td(u.name))
      tr.appendChild(_td(u.leicht.toString()))
      tr.appendChild(_td(u.mittel.toString()))
      tr.appendChild(_td(u.schwer.toString()))

      uebungentbody.appendChild(tr);
     
      checkbox.addEventListener('input', () => {
        if (checkbox.checked) {
          this.selectedUebungen.add(u.id)
          
        } else {
          this.selectedUebungen.delete(u.id)
        }
      this.dispatchEvent(new Event("selected", { /*composed: true */}))
      });

    }
   
  }

}

customElements.define('uebung-list', UebungList) 