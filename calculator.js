var nome = "João Felipe"

//inserção das notas
var notaDoPrimeiroBimestre = prompt ("Qual a nota do primeiro bimestre? ")
var n1b = parseFloat (notaDoPrimeiroBimestre)
var notaDoSegundoBimestre = prompt ("Qual a nota do segundo bimestre? ")
var n2b = parseFloat (notaDoSegundoBimestre)
var notaDoTerceiroBimestre = prompt ("Qual a nota do terceiro bimestre? ")
var n3b = parseFloat (notaDoTerceiroBimestre)
var notaDoQuartoBimestre = prompt ("Qual a nota do quarto bimestre? ")
var n4b = parseFloat (notaDoQuartoBimestre)
//calculo da media
var notaFinal = (n1b + n2b + n3b + n4b) / 4

//arrendondando nota
var notaFixada = notaFinal.toFixed(1)
//saidas do console
console.log("welcome Commander " + nome)
console.log((n1b + n2b + n3b + n4b) / 4)
