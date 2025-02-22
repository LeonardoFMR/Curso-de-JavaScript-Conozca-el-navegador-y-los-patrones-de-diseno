class View {

    #elemento;

    constructor(elemento) {
        if(this.constructor == View){
            throw Error('Clase no instanciable');

        }

        this.#elemento = elemento;
    }



    template(model) {
        throw Error('Debe implementar el método template en su vista');
    
    }

    update(model) {
        this.#elemento.innerHTML = this.template(model);
    }
}