/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    des:string;
    precio:number;
}

const telefono:Producto={
    des:'Samsung',
    precio:20000
}

const audifonos:Producto={
    des:'dantel',
    precio:80
}

export function calculaISV(productos: Producto[]):[number, number]{
    let total=0;
    productos.forEach(({precio})=>{
        total +=precio;
    })
    return [total, total * 0.15];
}

const articulos = [telefono, audifonos]
const [total, isv] = calculaISV(articulos);
console.log('Toal:',total)
console.log('Inpuesto:',isv)