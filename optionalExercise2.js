function trocaVogais(string) {

    const analisaVogal = (palavra, indiceLetra) => {
        const vogais = ['a', 'e', 'i', 'o', 'u',]
        const palavraAnalisada = palavra

        for (let j = 0; j < vogais.length; j++) {
            if (palavraAnalisada[indiceLetra] == vogais[j]) {
                return 1
            }
        }
        return 0
    }

    const palavraAnalisada = string
    const palavraModificada = []
    let palavraResultado = ''

    for(let i = 0; i < palavraAnalisada.length; i++) {
        if (analisaVogal(palavraAnalisada, i)) {
            palavraModificada.push('1')
        } else {
            palavraModificada.push(palavraAnalisada[i])
        }
    }

    for(let i =0; i < palavraModificada.length; i ++) {
        palavraResultado += palavraModificada[i]
    }

    return palavraResultado
}
