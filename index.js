//node ./index.js
//Para criar o pacote json, abrir terminal ->
// npm init
// por nome do projeto
// no json por "type": "module",

import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();

cliente1.nome = "Julia";
cliente1.cpf = "11111111111";
cliente1.rg = '123456789'

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "00000000000";
cliente2.rg = '987654321';

const contaCorrenteJulia = new ContaCorrente();
contaCorrenteJulia.agencia = 1001;
contaCorrenteJulia.cliente = cliente1;

contaCorrenteJulia.depositar(200);
const valorSacado = contaCorrenteJulia.sacar(50);

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 1001;
contaCorrente2.cliente = cliente2;

contaCorrenteJulia.transferir(10, contaCorrente2);

console.log(valorSacado)
console.log(contaCorrenteJulia);
console.log(contaCorrente2);

//console.log(cliente1);