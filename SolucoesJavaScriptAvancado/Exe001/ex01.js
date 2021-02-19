let N = gets();
let numeros = []

for(let i = 0; i < N; i++)
{
  numeros.push(parseInt(gets()))
}

const ordenarNumero = numeros.sort((a, b) => {
  return a - b;
})

const valoresUnicos = ordenarNumero.filter((valor, index, self) => {
    return self.indexOf(valor) === index;
})

// outra maneira de criar um vetor com valores unico
// const unicos2 = [...new Set(numerosOrd)]
// console.log(numerosOrd)
// console.log(unicos2)

const valores = ordenarNumero.reduce((valor, item) => {
    if(!valor[item]) valor[item] = 1;
    
    else valor[item]++;

    return valor
}, [])

let cont = 0

for(const key in valores)
{
  console.log(valoresUnicos[cont] + " aparece " + valores[key] + " vez(es)")
  cont++;
}
