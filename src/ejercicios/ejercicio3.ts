function sumar ( b:number,c:number){
    return ( b+ c);

}

const resultado2 = sumar( 12, 45 );
    console.log("el resultado es "+resultado2);


const sumarFlecha = (a:number, b:number):number =>{
    return a+b;
} 
function multiplicar(numero:number,otroNumero?:number, base = 2): number{
    return numero * base;

}

const resultado1 = multiplicar(5,10)
    console.log("el resultado es " + resultado1)
