class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor; 
        }
        
    };
}

const cliente1 = new Cliente();

cliente1.nome = "Julia";
cliente1.cpf = "11111111111";
cliente1.rg = '123456789'

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "00000000000";
cliente1.rg = '987654321';

const contaCorrenteJulia = new ContaCorrente();
contaCorrenteJulia.saldo = 0;
contaCorrenteJulia.agencia = 1001;

contaCorrenteJulia.saldo = 100;
console.log(contaCorrenteJulia.saldo);
contaCorrenteJulia.sacar(50);

console.log(contaCorrenteJulia.saldo);
console.log(cliente1);