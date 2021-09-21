import { CallExpression, parseIsolatedEntityName } from "typescript";

  
   interface superheroe{
       nombre:string,
       edad:number,
        direccion:Direccion,
       mostrarDireccion:() => string;
   }
   
   interface Direccion{
       calle:string;
       pais:string;
       ciudad:string;
   } 

    const superheroes:superheroe ={
        nombre: 'spiderman',
        edad: 30,
        direccion:{
            calle:'main str',
            pais:'USA',
            ciudad: 'NY'
        },

        mostrarDireccion(){
            return this.nombre + ',' +this.edad+ ','+this.direccion.pais + ','+ this.direccion.ciudad + ',' + this.direccion.calle;
        }
    }

    const direccion = superheroes.mostrarDireccion();
        console.log(direccion);