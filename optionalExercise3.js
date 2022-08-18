function tiraNumeros(string) {

    const analisaNumero = (palavra, indiceLetra) => {
      const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      for(let j = 0; j < numeros.length; j++) {
        if(palavra[indiceLetra] == numeros[j]) return 1
      }
      return 0
    }
  
    let palavraAnalisada = string
    let palavraModificada = []
    let palavraModificadaCounter = 0
    let palavraResultado = ''
  
    for(let i = 0; i < palavraAnalisada.length; i++) {
      if(analisaNumero(palavraAnalisada, i)) {
        continue
      }
      palavraModificada[palavraModificadaCounter] = palavraAnalisada[i]
      palavraModificadaCounter++
    }
  
    for(let i = 0; i < palavraModificada.length; i++) {
      palavraResultado += palavraModificada[i]
    }
    return palavraResultado
  }