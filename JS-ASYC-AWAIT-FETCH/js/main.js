let arrayRegistros = [];
async function leerRegistros(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    const respuesta = await fetch("http://chema19.mvlwver3.online/?nombre="+nombre+"&apellido="+apellido);
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
}

muestraRegistros();