//Aula 1

class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Julia";
cliente1.cpf = "11111111111";
cliente1.agencia = "1001";
cliente1.saldo = 0;
cliente1.rg = '123456789'

cliente2.nome = "Alice";
cliente2.cpf = "00000000000";
cliente2.agencia = "1001";
cliente2.saldo = 0;
cliente1.rg = '987654321';

console.log(cliente1, cliente2);