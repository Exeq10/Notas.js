
class Nota {
   static  contador= 0;
    constructor(texto){

        this.id  = ++ Nota.contador;
        this.texto = texto;
    }
}