var data = {
    nombre: "Fabian",
    apellido: "Maldonado",
    mensaje:"hola"
};

var person = function(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mensaje = function () {
        return "Hola " + this.nombre + " " + this.apellido;
    }
}

module.exports= person;