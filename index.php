<?php
    $var = "mensaje";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Venta</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/venta.css">
</head>
<body>
    <div class="nav">barra de navegacion</div>
    <div class="seccionGlobal">
        <div class="seccionImg">
            <img src="https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7845/SITours/entrada-de-acceso-prioritario-a-la-torre-eiffel-con-anfitri-n-in-paris-299567.jpg" alt="Paris">
        </div>
        <div class="seccionDesc">
            <h3>Nombre del producto</h3>
            <p>descripcion breve del producto</p>
            <input type="text" value="1">
            <ul>
                <li>caracteristica 1</li>
                <li>caracteristica 2</li>
                <li>caracteristica 3</li>
            </ul>

        </div>
        <div class="seccionGuardar">
            <div class="botones">
                <button class="btn btn-outline-primary" onclick="onSelectProducto()">Seleccionar</button>
                <button class="btn btn-outline-primary" onclick="agregarAlCarritoIrTienda()">Agregar al carrito</button>
                <button class="btn btn-outline-primary" onclick="agregarAlCarritoIrCompra()">Comprar</button>
                <button class="btn btn-outline-primary" onclick="eliminarItemCarrito()">Eliminar</button>
            </div>
            <div id="elems"></div>
        </div>
    </div>

    <script src="js/agregar.js"></script>
</body>
</html>