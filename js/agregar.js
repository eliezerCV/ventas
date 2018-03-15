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