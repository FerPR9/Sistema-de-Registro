export class Registro{
    _id?: Number;
    nombre: String;
    correoElectronico: String;
    telefono: Number;
    areaTrabajo: String;
    //fechaRegistro: Date;
    foto: any; 

    constructor(nombre: String, correoElectronico: String, telefono: number,
         areaTrabajo: String, fechaRegistro: Date, foto: any){
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.telefono = telefono;
        this.areaTrabajo = areaTrabajo;
       // this.fechaRegistro = fechaRegistro;
       this.foto = foto;
    }
}