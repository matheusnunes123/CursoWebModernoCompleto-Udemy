//Factory com parâmetros

function criarProduto(nomeProduto, precoProduto){
    return {
        nomeProduto,
        precoProduto,
        desconto: 0.1
    }
  }
  
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 1199.49))

// funcao factory

function criarFuncionario(nome, salarioBase, faltas){
  return {
      nome,
      salarioBase,
      faltas,
      getSalario(){
        return(salarioBase/30)*(30-faltas) 
      }
  }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma Função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')

console.log(fromJSON.info)