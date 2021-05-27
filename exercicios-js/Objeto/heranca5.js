console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)  

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

array = [2,1,1]
console.log(array.first())
console.log([0,1,2,3,4].first())
console.log(['a','B','C'].first())


String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Escola cod3r'.reverse())