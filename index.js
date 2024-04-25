var setadireita = window.document.getElementById("seta-direita")
var bruna = window.document.getElementById("bruna")
var Samantha = window.document.getElementById("samantha")
var leonard = window.document.getElementById("leonard")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    bruna.style ="display:flex"
    leonard.style ="display:none"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:85%"
 
}
function RolarParaEsquerda() {
    bruna.style ="display:none"
    leonard.style ="display:flex"
    setadireita.style ="display:flex; margin-top:100px"
    setaesquerda.style ="display:none"

}