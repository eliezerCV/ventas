function onSelectProducto(){

    var item = {
        clave:'1234',
        nombre: 'Nombre del producto',
        desc: 'descripcion breve del producto',
        precio: '25.00'
    }
    try {
        localStorage.setItem("itemTemp", JSON.stringify(item));
    } catch (error) {
        alert(error);
    }
}

function agregarAlCarritoIrTienda(){
    
    var itemTemp = JSON.parse(localStorage.getItem("itemTemp"));
    var elems = {};

    var newItem = {
        clave: itemTemp.clave,
        nombre: itemTemp.nombre,
        desc: itemTemp.desc,
        precio: itemTemp.precio,
        cant:'5'
    }

    if(localStorage.getItem("elems")){
        elems = JSON.parse(localStorage.getItem("elems"));
        elems['elems'].push(newItem);
    }else{
        elems = {elems:[{
            clave: itemTemp.clave,
            nombre: itemTemp.nombre,
            desc: itemTemp.desc,
            precio: itemTemp.precio,
            cant:'5'
        }]}
    }
   
    localStorage.setItem("elems", JSON.stringify(elems));

}

function agregarAlCarritoIrCompra(){
    var items = JSON.parse(localStorage.getItem("elems"));
    console.log(items);

    window.location.href = "carrito.php";
}

function eliminarItemCarrito(){
    try {
        localStorage.removeItem("elems");
    } catch (error) {
        alert(error)
        return 0;
    }

    alert("eliminado");
}


////**************************CARRITO***************************////
function cargarItemsfromLocalStorage(){
    if(localStorage.getItem("elems")){
        var items = JSON.parse(localStorage.getItem("elems"));
        var items2 = items['elems'];
        var html = '';
        console.log(items['elems']);
        
        for(var i in items2){
            html = '<div class="seccionItems">'

            html += '<img src="https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7845/SITours/entrada-de-acceso-prioritario-a-la-torre-eiffel-con-anfitri-n-in-paris-299567.jpg" alt="Paris">'
            html += '<h4 class="h4">'+items2[i].nombre+'</h4>'
            
            html += '</div>'
        }

        document.getElementById("items").innerHTML = html;
    }else{
        document.getElementById("items").innerHTML = "<h2>Aun no tiene productos en el carrito, <a href='index.php'>Agregar Productos</a></h2>"
    }
}