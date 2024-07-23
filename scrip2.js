let arrProductos = ["dulce", "cerveza", "vino", "jugo", "oreos", "azucar", "yerba", "pure", "sal", "fideos"];
let arrPrecio =     [1000,      1300,   2500,     200,    3299,      860,   384,       699,     1089,     1020];
let arrCant =        [55,        10,      10,       10,     10,     10,       10,      10,    10,       10];
let total = 0;

// Función para comprar un producto y actualizar el total en pantalla
function comprarProducto(producto){
    let cantidadInput = document.getElementById(producto).querySelector("input");
    let cantidad = parseInt(cantidadInput.value);
    
    let stockDisponible = arrCant[arrProductos.indexOf(producto)];
    
    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor que cero.");
    } else if (cantidad > stockDisponible) {
        alert(`No hay suficiente stock disponible. Stock actual: ${stockDisponible}`);
    } else {
        let totalCompra = cantidad * arrPrecio[arrProductos.indexOf(producto)];
        total += totalCompra;
        document.getElementById("total").innerText = total;
     
        
        // Actualizar el stock disponible después de la compra
        arrCant[arrProductos.indexOf(producto)] -= cantidad;
        
        // Actualizar la cantidad disponible en el input del producto
        cantidadInput.max = arrCant[arrProductos.indexOf(producto)];
    }
}



//indeof es el indice del producto en el arrProductos. 
//indexOf devuelve el indice del elemento en el arrProductos que coincide con el producto
//Input es el input del producto
//parseint convierte el valor del input a un numero entero
//max es el valor maximo que puede tener el input del producto
//innerText es el texto que se muestra en el input del producto