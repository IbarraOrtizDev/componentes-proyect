function entradaText(){ return'<div class="entrada"><input type="text" required id="entradaText"><label for="entradaText">Nombre</label></div><style>.entrada input{width: 100%;background-color: transparent;border: none;outline: none;border-bottom:1px solid black;font-size: 16px;height: 2rem;font-family: Arial, Helvetica, sans-serif;}.entrada input:focus{border-bottom:1px solid #49ab00}.entrada input:focus~label{font-size: 12px;bottom: 28px;color: #49ab00;}.entrada input:valid~label{font-size: 12px;bottom: 28px;}.entrada{position: relative;}.entrada label{font-size: 18px;position: absolute;left: 2px;bottom: 7px;user-select: none;}</style>'} 
class Entrada extends HTMLElement{
    constructor(){
        super()
        this.iniciar()
    }
    iniciar(){
        let root = this.attachShadow({mode:'open'})
        root.innerHTML = entradaText()
    }
}
window.customElements.define('entrada-text', Entrada)