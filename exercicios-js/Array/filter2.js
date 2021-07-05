Array.prototype.filter2 = function(callback){

    const newArray = []

    for(i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }  
    }

    return newArray

}



const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},
]


const produtosCaros = produtos => produtos.preco >= 500
const produtosFrageis = produtos => produtos.fragil

const resultado = produtos.filter2(produtosCaros).filter2(produtosFrageis)
console.log(resultado)