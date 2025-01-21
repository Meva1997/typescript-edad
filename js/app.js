function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var nacimiento = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var mesActual = hoy.getMonth();
    var diaActual = hoy.getDate();
    var mesNacimiento = nacimiento.getMonth();
    var diaNacimiento = nacimiento.getDate();
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    return edad;
}
var fecha = "1997-07-02";
console.log("La edad es: ".concat(calcularEdad(fecha), " a\u00F1os"));
