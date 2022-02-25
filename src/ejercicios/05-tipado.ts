/*
    ===== Código de TypeScript =====
*/
interface superHeroe{
    nombre:string;
    edad:number;
    direccion:Direccion;
    mostrarDireccion: ()=>string;
}
interface Direccion{
    calle:string;
    pais:string;
    ciudad:string;
}
const superHeroe:superHeroe={
    nombre:'Camilo',
    edad:18,
    direccion:{
        calle:'Main street',
        pais:'COL',
        ciudad:'Manizales'
    },
    mostrarDireccion(){
        return this.nombre + ', '+ this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion= superHeroe.mostrarDireccion();

console.log(direccion)
