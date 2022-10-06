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