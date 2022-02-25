/*
    ===== Código de TypeScript =====
*/

interface personaje1{
    nombre:string,
    hp:number,
    habilidades:string[],
    puebloNatal?:string;
    mostrarHp: () => void;
}

function curar(personaje:personaje1, curarX:number):void{
    personaje.hp+=curarX;
    console.log(personaje);
}

const nuevoPersonaje:personaje1={
    nombre:'Camilo',
    hp:50,
    habilidades:['Rayos X'],
    puebloNatal:'Colombia',
    mostrarHp(){
        console.log('vida: ',this.hp);
    }
}
curar(nuevoPersonaje,10);
nuevoPersonaje.mostrarHp();

