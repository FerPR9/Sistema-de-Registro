export class Conferencia{
    _id?: Number;
    nombreConferencia: String;
    nombreConferencista: String;
    fechaConferencia: Date;
    lugarConferencia: String;
    cupoConferencia: Number
    fotoConferencista: any; 
    experienciaConferencista: String;

    constructor( nombreConferencia: String,nombreConferencista: String,fechaConferencia: Date,
        lugarConferencia: String, cupoConferencia: Number, fotoConferencista: any, experienciaConferencista: String){
        this.nombreConferencia = nombreConferencia;
        this.nombreConferencista = nombreConferencista;
        this.fechaConferencia = fechaConferencia;
        this.lugarConferencia = lugarConferencia;
        this.cupoConferencia = cupoConferencia;
        this.fotoConferencista = fotoConferencista;
        this.experienciaConferencista = experienciaConferencista;
    }
}