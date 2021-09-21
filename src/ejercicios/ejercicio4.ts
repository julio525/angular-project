interface Personaje{
    nombre: string,
    pv: number,

}

function curar(personaje:Personaje,curarX:number): void{
    personaje.pv += curarX;
    console.log(personaje); 
};

const nuevoPersonaje:Personaje = {
    nombre:'STRIDER',
    pv:50
}

curar(nuevoPersonaje,25);