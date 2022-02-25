import { Producto, calculaISV } from './08-desestructuracion-argumentos';
/*
    ===== Código de TypeScript =====
*/


const carritoCompra: Producto[]=[
    {
        des:'telefono',
        precio:100
    },
    {
        des:'telefono 2',
        precio:100
    }
];

const [total, isv] = calculaISV(carritoCompra);

console.log('Total: ', total);
console.log('Inpuesto: ',isv);

