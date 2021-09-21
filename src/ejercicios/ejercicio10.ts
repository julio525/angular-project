class PersonaNormal{
    constructor( 
        public nombre:string, 
        public direccion:string
    ){

}
}

class hero1 extends PersonaNormal{
constructor(public alterEgo: string, public edad: number, public nombreReal:string){
    super(nombreReal,'NY,USA')
}
}

const ironMan1 = new hero1('ironMan',21,'tony stark');
console.log(ironMan1);

