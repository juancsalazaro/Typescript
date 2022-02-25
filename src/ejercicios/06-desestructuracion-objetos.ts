/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalle;
}

interface Detalle{
    autor:string;
    anio:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Soy Guapo',
    detalles:{
        autor:'Rafael pombo',
        anio:2000
    }
}

const { volumen, segundo, cancion, detalles, detalles:{autor}}=reproductor;

const { anio }=detalles;

console.log('Volumen Actual: ',volumen)
console.log('Autor Actual: ',segundo)
console.log('Cancion Actual: ',cancion)
console.log('Autor Actual: ',autor)
console.log('año Actual: ',anio)