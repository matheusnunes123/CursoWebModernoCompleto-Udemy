// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome:'ana'}

Object.freeze(pessoa)
pessoa.nome = 'maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao2'})
pessoaConstante.nome = 'maria'
console.log(pessoaConstante)