export class Taller {
    _id?: number;
    nombreTaller: string;
    nombreResponsable: string;
    fechaTaller: Date;
    lugarTaller: string;
    cupoTaller: number;
    fotoResponsableTaller: File | null; // Cambiado a 'File | null' para manejar archivos
    experienciaResponsableTaller: string;

    constructor(
        nombreTaller: string,
        nombreResponsable: string,
        fechaTaller: Date,
        lugarTaller: string,
        cupoTaller: number,
        fotoResponsableTaller: File | null,
        experienciaResponsableTaller: string
    ) {
        this.nombreTaller = nombreTaller;
        this.nombreResponsable = nombreResponsable;
        this.fechaTaller = fechaTaller;
        this.lugarTaller = lugarTaller;
        this.cupoTaller = cupoTaller;
        this.fotoResponsableTaller = fotoResponsableTaller;
        this.experienciaResponsableTaller = experienciaResponsableTaller;
    }
}
