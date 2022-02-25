/*
    ===== Código de TypeScript =====
*/

let habilidades:{} = [
    {perro:'lola'}
]

let sintipo= [100,'string',true]

let contipo:string[]= ['100','string','true']

interface personaje{
    nombre:string,
    hp:number,
    habilidades:string[],
    puebloNatal?:string;
}

const personaje:personaje={
    nombre:'batman',
    hp:100,
    habilidades: ['bash','counter','healing']
}

personaje.puebloNatal='Colombia'

console.log(personaje)
console.table(personaje)
