class Venta{
    #fecha;
    #cantidad;
    #valor;

    constructor(fecha, cantidad, valor) {
        
        this.#fecha = new Date(fecha);
        this.#cantidad = cantidad;
        this.#valor = valor;
        Object.freeze(this);
    }


    get fecha(){
        return new Date(this.#fecha.getTime());

    }

    get cantidad(){
        return this.#cantidad;
    }
    
    get valor(){
        return this.#valor;
    }


    get totalVenta(){
        return this.#cantidad * this.#valor;
    }
}

