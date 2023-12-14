const inventario = [
    { nombre: "galletas", precio: 2400, categoria: "Alimentos", cantidad: 20 },
    { nombre: "papas", precio: 4000, categoria: "Alimentos", cantidad: 32 },
    { nombre: "yogourt", precio: 3000, categoria: "Alimento", cantidad: 10 }
];

const div = document.querySelector(".contenedor");

// const div2 = document.createElement("div");
// div2.textContent = "producto:" + inventario[0]["nombre"]+ ", cantidad:" + inventario[0]["cantidad"]
// + ", precio:" + inventario[0]["precio"];
// div.appendChild(div2)

inventario.forEach((producto, index) => {
    const div2 = document.createElement("div");
    div2.textContent = "producto:" + producto["nombre"] + ", cantidad:" + producto["cantidad"] + ", precio:" + producto["precio"] + ", categoria:" + producto["categoria"];

    div2.id = producto["nombre"];
    div.appendChild(div2);


    const button = document.createElement("button");
    button.textContent = "Editar";
    button.setAttribute("onclick", `editar("${producto.nombre}")`);
    div.appendChild(button);
    // const br = document.createElement("br");
    // div.appendChild(br);

    const intercambiarButton = document.createElement("button");
    intercambiarButton.textContent = "Intercambiar";
    intercambiarButton.setAttribute("onclick", `intercambiarOrden("${producto.nombre}")`);
    div.appendChild(intercambiarButton);

});

function editar(nombreProducto) {
    let productoParaModificar;
    inventario.forEach((producto) => {
        if (producto.nombre == nombreProducto) {
            productoParaModificar = producto;
        }
    })

    const nombreHtml = document.getElementById("nombre")
    nombreHtml.value = productoParaModificar.nombre

    const cantidadHtml = document.getElementById("cantidad")
    cantidadHtml.value = productoParaModificar.cantidad

    const precioHtml = document.getElementById("precio")
    precioHtml.value = productoParaModificar.precio

    const categoriaHtml = document.getElementById("categoria");
    categoriaHtml.value = productoParaModificar.categoria;

    const idHtml = document.getElementById("id");
    idHtml.value = productoParaModificar.nombre;
}




function guardar() {
    const nombreProducto = document.getElementById("id").value;

    let productoParaModificar;

    inventario.forEach((producto) => {
        if (producto.nombre == nombreProducto) {
            productoParaModificar = producto;
        }
    })

    productoParaModificar.nombre = document.getElementById("nombre").value;
    productoParaModificar.cantidad = document.getElementById("cantidad").value;
    productoParaModificar.categoria = document.getElementById("categoria").value;
    productoParaModificar.precio = document.getElementById("precio").value;

    console.log("Desde guardar", nombreProducto, JSON.stringify(productoParaModificar));
    console.log(JSON.stringify(inventario))

    const div = document.getElementById(nombreProducto);

    // Limpiar el contenido existente en el div, elimina todos sus primeros hijos
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    
    // Texto inicial mostrando el nombre del producto
    const textoProducto = document.createTextNode(`producto:${productoParaModificar["nombre"]}, cantidad:`);
    div.appendChild(textoProducto);

    // Elemento span para mostrar la cantidad con fondo gris
    let cantidadSpan = document.createElement("span");
    cantidadSpan.textContent = productoParaModificar["cantidad"];
    cantidadSpan.style.fontWeight = "bold";
    div.appendChild(cantidadSpan);

    // Texto indicando el precio
    const textoPrecio = document.createTextNode(`, precio:`);
    div.appendChild(textoPrecio);

    // Elemento span para mostrar el precio en negrita
    let precioSpan = document.createElement("span");
    precioSpan.style.backgroundColor = "gray";
    precioSpan.style.color = "yellow";
    
    precioSpan.textContent = productoParaModificar["precio"];
    div.appendChild(precioSpan);

    // Texto indicando la categoría
    const textoCategoria = document.createTextNode(`, categoria:`);
    div.appendChild(textoCategoria);


    let span = document.createElement("span");

    // Aplicar estilo rojo si la categoría es "Alimento"
    if (productoParaModificar["categoria"] == "Alimento") {
        span.style.color = "red";
    }

    // Texto de la categoría
    const textoCategoriaValor = document.createTextNode(productoParaModificar["categoria"]);
    span.appendChild(textoCategoriaValor);

    // Agregar el span al div
    div.appendChild(span);

}


function intercambiarOrden(nombreProducto) {

    const div = document.getElementById(nombreProducto);

    // limpia el div
    div.textContent = '';

    let productoParaModificar;
    inventario.forEach((producto) => {
        if (producto.nombre == nombreProducto) {
            productoParaModificar = producto;
        }
    })

    if (productoParaModificar) {
        const textoProducto = document.createTextNode(`producto:${productoParaModificar["nombre"]}, cantidad:`);
        div.appendChild(textoProducto);

        let cantidadSpan = document.createElement("span");
        cantidadSpan.textContent = productoParaModificar["cantidad"];
        cantidadSpan.style.fontWeight = "bold";
        div.appendChild(cantidadSpan);

        const nuevoPrecio = document.createTextNode(`, categoria:`);
        div.appendChild(nuevoPrecio);
        
        let span = document.createElement("span");
        // Aplicar estilo rojo si la categoría es "Alimento"
        if (productoParaModificar["categoria"] == "Alimento") {
            span.style.color = "red";
        }
    
        // Texto de la categoría
        const textoCategoriaValor = document.createTextNode(productoParaModificar["categoria"]);
        span.appendChild(textoCategoriaValor);
    
        // Agregar el span al div
        div.appendChild(span);

        const textoPrecio = document.createTextNode(`, precio:`);
        div.appendChild(textoPrecio);

        // Elemento span para mostrar el precio en negrita
        let precioSpan = document.createElement("span");
        precioSpan.style.backgroundColor = "gray";
        precioSpan.style.color = "yellow";
        
        precioSpan.textContent = productoParaModificar["precio"];
        div.appendChild(precioSpan);
    }
}
