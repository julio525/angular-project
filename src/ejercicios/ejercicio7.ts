

export interface producto {
    desc: string;
    precio: number;
}

const telefono: producto ={
    desc: 'nokia al',
    precio:150
}

const tableta: producto ={
    desc: 'ipad air',
    precio:350
}

export function calculaISV(Producto: producto[]):[number, number]{
    let total = 0;
    Producto.forEach((Producto)=>{
        total += Producto.precio;
    })
    return [total ,total * 0.15]
}

const articulos =[telefono, tableta];
 const isv = calculaISV(articulos);
console.log('ISV:' + isv);