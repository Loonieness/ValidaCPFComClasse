
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,            
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    //se o primeiro caracter se repetir 11 vezes, retorna true
    isSequence() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }


    //faz as validações com condições
    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequence()) return false;
        return 'CHEGUEI AQUI';
    }
}

const validacpf = new ValidaCPF('070.987.720-03');
console.log(validacpf.valida());

// 705.484.450-52 070.987.720-03