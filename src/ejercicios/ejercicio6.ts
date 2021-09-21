
    interface Reproductor{
        volumen: number;
        segundo: number;
        cancion: string;
        detalles:Detalles,
    }

    interface Detalles{
        autor: string;
        anio: number;
    }

    const reproductor: Reproductor={
        volumen: 90,
        segundo: 36,
        cancion: 'mess',
        detalles: {
            autor:' ed sheran',
            anio: 2015
        }
    }

    const {volumen, segundo, cancion, detalles}= reproductor;
    const {autor}= detalles;
    const {anio}=detalles;

    //console.log("el volumen actual es "+ volumen);
    //console.log("el segundo actual es "+ segundo);
    //console.log("la cancion actual es "+ reproductor.cancion);
    //console.log("el autor es " + autor) 

    const dbz: string []=['goku','vegeta','trunks'];
    const [p1,p2,p3]= dbz;
    console.log("el personaje es " + p1);
    console.log("el personaje es " + p2);
    console.log("el personaje es " + p3);