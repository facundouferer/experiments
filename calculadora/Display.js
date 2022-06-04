class Display{

    constructor(displayValorAnterior, displayValorAtual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorAtual = displayValorAtual;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.simbolo = {
            sumar : '+',	
            restar : '-',
            multiplicar : 'x',
            dividir : '÷'
        }
    }

    agregrarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual + numero; 
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorAtual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior.toString()} ${this.simbolo[this.tipoOperacion] || ''}`;
    }

    borrarNumero(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return        

        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior,valorActual);
    }

    computar(operacion){

        this.tipoOperacion !== 'igual' && this.calcular();        
        this.tipoOperacion = operacion;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores(); 
    }

}