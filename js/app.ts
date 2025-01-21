
function calcularEdad(fechaNacimiento: string): number {
    const hoy = new Date(); 
    const nacimiento = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - nacimiento.getFullYear(); 

    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = nacimiento.getMonth();
    const diaNacimiento = nacimiento.getDate();

    if(mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)){
        edad--; 
    }
    return edad; 
}

    const fecha = "1997-07-02"; 
    console.log(`La edad es: ${calcularEdad(fecha)} años`); 

