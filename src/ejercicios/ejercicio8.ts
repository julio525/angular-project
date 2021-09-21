import { calculaISV, producto } from "./ejercicio7";


const carritoDeCompras: producto[]=[
    {
        desc: 'telefono1',
        precio:100,

    },
    {
        desc: 'telefono2',
        precio:150
    }
];

const [total, isv] = calculaISV(carritoDeCompras);

console.log('total'+ total);
console.log('ISV'+ isv)

