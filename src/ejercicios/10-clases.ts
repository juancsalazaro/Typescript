/*
    ===== Código de TypeScript =====
*/

class persona{
    // nombre:string;
    // direccion: string;

    constructor(public nombre:string, public direccion: string){}
}

class Heroe extends persona{
    // alterEgo:string;
    // edad: number;
    // nombreReal: number;

    // imprimirNombre(){
    //     return this.alterEgo + ' ' + this.nombreReal;
    // }

    constructor(
        public alterEgo:string,
        public edad: number,
        public nombreReal: string
        ) {
            super(nombreReal, 'Ney York');
        }

}



const hulk= new Heroe('IronMan',18,'Camilo');

console.log(hulk);