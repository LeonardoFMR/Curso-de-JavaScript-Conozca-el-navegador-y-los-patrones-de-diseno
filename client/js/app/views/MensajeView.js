class MensajeView extends View{

    constructor(elemento) {
        super(elemento);
    }


template(model) {
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>`: `<p></p>`
}



}


// class MensajeView extends View{
//     #elemento;
    
//     constructor(elemento){
//         this.#elemento = elemento;
//     }
    
    
    
//     template(model) {
//         return `<p class="alert alert-info">${model.texto}</p>`
//     }
    
//     update(model) {
//      this.#elemento.innerHTML = this.#template(model);
//     }
    
//     }