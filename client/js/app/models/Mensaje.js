class Mensaje {
    #texto;

    constructor(texto = 'Las papits'){
        this.#texto = texto;
    }

    

    get texto(){
        return this.#texto;
    }

    set texto(texto){
        this.#texto = texto;
    }

}


let mensaje = new Mensaje();
console.log(mensaje.texto);
mensaje.texto = 'texto';