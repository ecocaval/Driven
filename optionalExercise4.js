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