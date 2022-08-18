function contaLetras(string, letra) {
	let palavraAnalisada = string
	let letraAnalisada = letra
	let quantidadeDeLetras = 0

	for(let i = 0; i < palavraAnalisada.length; i++) {
		if(palavraAnalisada[i] == letraAnalisada) quantidadeDeLetras++
	}

	return quantidadeDeLetras
}