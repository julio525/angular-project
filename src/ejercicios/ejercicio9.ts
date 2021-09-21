class hero{
    alterEgo:string;
    edad:number;
    nombreReal: number;

    imprimirNombre(){
       return this.alterEgo +',' + this.nombreReal;
    }
}

const ironMan = new hero();
console.log(ironMan);

