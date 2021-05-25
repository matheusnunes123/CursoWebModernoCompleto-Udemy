const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//Pega os nomes de atributos em objetos
console.log(Object.keys(pessoa))
//Pega os valores de um objeto
console.log(Object.values(pessoa))

//Retorna um array com todas as chaves e valores
console.log(Object.entries(pessoa))

// Usando Foreach e destructuring para pegar os valores
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Definir propriedade de uma chave e valor
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234

console.log(obj)