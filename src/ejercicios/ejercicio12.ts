interface pasajero{
    nombre:string;
    hijos?:string[];
}

const pasajero1: pasajero={
    nombre: 'fernando',

}

const pasajero2: pasajero={
    nombre:'melisa',
    hijos:['natalia ','misael']
}

function imprimeHijos(pasajero:pasajero):void{
    const cuatohijos = pasajero.hijos?.length;
    console.log(" el numero de hijos son " + cuatohijos);
}

imprimeHijos(pasajero2);