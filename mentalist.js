var numeroSecreto = parseInt(Math.random() * 10)
alert(numeroSecreto)
var tentativas = 3

while (tentativas > 0){
  
  var chute = parseInt(prompt("Digite um número entre 0 e 10:"))

  if (numeroSecreto == chute) {
    alert("Acertou")
    console.log("Acertou Miseravi")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor")
    tentativas = tentativas - 1
    console.log("O número secreto é menor")
  } else if (chute < numeroSecreto){
    alert("O número secreto é maior")
    console.log("O numero secreto é maior")
    tentativas = tentativas - 1
  } else {
    alert("Errou. O número secreto era " + numeroSecreto)
    console.log("Errou, seu Inocente")
  }
}

if (chute != numeroSecreto){
  alert("Suas tentativas acabaram. O número secreto era: " + numeroSecreto)
}

//Nova Função: console.log (função para o valor informado pelo usuario, aparecerá no consolelog)
//Novo Comando: while (enquanto)
//Novo Comando: break (parar o looping do while)
//Novo Comando: Math.random(gera um número aleatório)
//Nova simbolo: != (Diferente)