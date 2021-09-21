
   function queTipoSoy<t>(argumento: t){
    return argumento;
}

let soystring = queTipoSoy("hola mundo");
let soynumero = queTipoSoy(10);
let soyExplicito = queTipoSoy<number>(100);