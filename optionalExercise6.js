function letrasRepetidas(string) {
	let listaDeLetrasRepetidas = []
    let palavraAnalisada = string

    for(let i = 0; i < palavraAnalisada.length; i++) {
        for(let j = i-1; j >= 0; j--) {
            if(palavraAnalisada[i] == palavraAnalisada[j]) {
                listaDeLetrasRepetidas.push(palavraAnalisada[i])
                break
            }
        }
    }
    return listaDeLetrasRepetidas
}