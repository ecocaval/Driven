/*
    Soma até a Meta
    Implemente a função ao lado que recebe 2 números como parâmetros e retorna um array contendo os números consecutivos ao 1o parâmetro até o valor em que, ao somar todos os números no array, temos o valor passado no 2o parâmetro.

    Exemplo: se for passado os valores “2” e “12”, a função deve retornar o array [3,4,5], pois 3+4+5=12 que é a meta passada no 2o parâmetro

    Exemplo: se for passado os valores “12” e “58”, a função deve retornar o array [13,14,15,16], pois 13+14+15+16=58 que é a meta informada no 2o parâmetro
*/

function somaAteMeta(inicio, meta) {

    const checaMeta = (lista, metaDaLista, proximoNumero) => {
      let somaLista = 0
      for(let j = 0; j < lista.length; j++) {
          somaLista += Number(lista[j])
      }
      somaLista += proximoNumero
      if(somaLista > metaDaLista) {
          return  1
      } 
      return 0
    }
  
    const primeiroNumero = inicio + 1
    let listaDeNumeros = []
    let listaCounter = 0
    let proximoNumero = primeiroNumero + 1
  
    listaDeNumeros[listaCounter] = primeiroNumero
    listaCounter++
  
    while(!checaMeta(listaDeNumeros, meta, proximoNumero)) {
        listaDeNumeros[listaCounter] = proximoNumero
        listaCounter++
        proximoNumero++
    }
  
    return listaDeNumeros
  }