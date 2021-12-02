let registrosHTML=document.getElementById('registrosHTML');
let arrayRegistros = [];
async function leerRegistros(){
    const respuesta = await fetch("data/registros.json");
    const registros = await respuesta.json();

    return registros;
}

async function muestraRegistros(){
    try{
        arrayRegistros = await leerRegistros();
    }
    catch(e){
        console.log("Error generado:" +e);
    }
    console.log(arrayRegistros);
    arrayRegistros.forEach(function(item, index){
        registrosHTML.innerHTML = registrosHTML.innerHTML + item.nombre + " " + 
        item.apellido + " " + item.telefono + "<br>";
    });
}

muestraRegistros();