// **Iteración #1: Usa includes**

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC C productsa']

function displayEqualsIteams() {
    for (let i = 0; i < products.length; i++) {
        if(products[i].toLocaleLowerCase().includes('Camiseta'.toLocaleLowerCase())){
        console.log(products[i])
        }  

    }
}

displayEqualsIteams(products)

// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let index = 0; index < alumns.length; index++) {
    const element = alumns[index];
    let approvedCount = 0; 
    approvedCount = element.T1 ? approvedCount++ : approvedCount;
    approvedCount = element.T2 ? approvedCount++ : approvedCount;
    approvedCount = element.T3 ? approvedCount++ : approvedCount;
    element.isApproved = approvedCount >= 2 ? true : false;
}
console.log(alumns);

