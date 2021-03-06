export class Restaurante {

    email: string;
    nombreRestaurante: string;
    nroHabilitacion: string;
    razonSocial: string;
    rut: string;
    direccion: string;
    descripcionMenues: string;
    celular: string;
    foto: string;
    precioEnvio: Number;
    horario: string;
    confirmado: boolean;
    calificacionVPI: number;

    /**/
   
    
    

    constructor(email: string, nombreRestaurante: string, nroHabilitacion: string,
        razonSocial: string, rut: string, direccion: string, descripcionMenues: string, celular: string,
        foto: string, precioEnvio: Number, horario: string, confirmado: boolean, calificacionVPI: number)
        {
        this.email = email;
        this.nombreRestaurante = nombreRestaurante;
        this.nroHabilitacion = nroHabilitacion;
        this.razonSocial = razonSocial;
        this.rut = rut;
        this.direccion = direccion;
        this.descripcionMenues = descripcionMenues;
        this.celular = celular;
        this.foto = foto;
        this.precioEnvio = precioEnvio;
        this.horario = horario;
        this.confirmado = confirmado;
        this.calificacionVPI = calificacionVPI;
    }

}
