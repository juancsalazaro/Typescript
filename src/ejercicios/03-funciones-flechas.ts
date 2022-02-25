/*
    ===== Código de TypeScript =====
*/

function sumar(a:number,b:number):Number{
    return a+b;
}

const sumarFlecha= (a:string,b:string):string =>{
    return a+b
}

const resultado=sumar(9,7)

function multiplicar(numero:number, otronumero?:number, base:number=5):number{
    return numero*base
}

const resultadoM=multiplicar(9,7)

console.log(resultado)
console.log(sumarFlecha('Camilo ','Salazar'))