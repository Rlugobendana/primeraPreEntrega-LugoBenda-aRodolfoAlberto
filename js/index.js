function mostrarPrecio(codigo) {
    switch(codigo) {   case "1":
            alert("Los zapatos para correr cuestan $100")
                break
        case "2":
            alert("Los zapatos para jugar fútbol cuestan $ 200")
        break
        case "3":
            alert("El balón de fútbol cuesta $40")
    case "4": 
    alert("La pelota de béisbol cuesta $50")
    break
    default:
        console.warn("Por favor, ingresa una opción válida")
    
        }
}


/**Iteración */

function consultarPrecio() {
let preguntar = true;
while(preguntar) {
    let codigoProducto = prompt("Por favor, ingrese el código del producto a comprar:")
    if(codigoProducto !== '' && codigoProducto !== null) {
        mostrarPrecio(codigoProducto)
    } else {
        console.warn("Por favor, ingrese un código de precio válido.")
    }  


preguntar = confirm ("¿Deseas conocer el precio de otro artículo deportivo?")

}
}




