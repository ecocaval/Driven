/*
    Troca as Vogais
    Implemente a função ao lado que recebe uma string como parâmetro e retorna a string original, mas com o número 1 no lugar das vogais

    Exemplo: se for passada a palavra “uva”, a função deve retornar “1v1”

    Exemplo: se for passada a palavra “carro”, a função deve retornar “c1rr1”

    Dica: para realizar essa questão você vai precisar de uma ferramenta nova. Talvez seja útil construir um array vazio. Você pode fazer isso com o seguinte comando:

    const arr=[] //constrói um array vazio chamado "arr"
    Depois disso, você, talvez, queira encher esse novo array com elementos. Você pode fazer isso escrevendo ".push" logo após o nome do array. Então, para inserir "3" no array que acabamos de criar fazemos:

    arr.push(3) //Insere 3 dentro do array "arr"
*/

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
