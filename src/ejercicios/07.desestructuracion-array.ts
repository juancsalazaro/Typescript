/*
    ===== Código de TypeScript =====
*/

const dbz: string[]= ['Goku','Vegeta','Thanos'];

const [p1,p2,p3]=dbz;

//OTRA FORMA

let nombres = ["David", "Erick", "Jean", "Jose"];

const { 2 : amigoJean } = nombres;

console.log('Perzonaje 1: ',p1);
console.log('Perzonaje 2: ',p2);
console.log('Perzonaje 3: ',p3);
console.log('OTRA FORMA DE DESESTRUCTURACION: ',amigoJean);