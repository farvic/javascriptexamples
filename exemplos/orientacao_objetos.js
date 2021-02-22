class Calculadora {

    constructor() {
        this.a = 5;
        this.b = 5;
        this.operador = 'mult';
    }

    calcular() {
        if(this.operador === 'mult') {
            console.log(this.a * this.b);
        }
    }
}

calculadora = new Calculadora();
calculadora.calcular();