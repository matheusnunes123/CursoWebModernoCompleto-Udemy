const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // remove o último elemento do Array

console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um item no final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro item do Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um item no início do Array
console.log(pilotos)

//Splice pode adiciona e remove elementos do array

pilotos.splice(2,0, 'Bottas','Massa') //Indice, quantos elementos serão removidos, e quais elementos serão adicionados
console.log(pilotos)

//Splice removendo
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array gerado a partir do indice de um array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)