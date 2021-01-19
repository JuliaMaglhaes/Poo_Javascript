//node ./index.js
//Para criar o pacote json, abrir terminal ->
// npm init
// por nome do projeto
// no json por "type": "module",

import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Júlia", "11111111111");
const cliente2 = new Cliente ("Alice", "00000000000")

const contaCorrenteJulia = new ContaCorrente(1001, cliente1);

contaCorrenteJulia.depositar(200);
const valorSacado = contaCorrenteJulia.sacar(50);

const contaCorrente2 = new ContaCorrente(1001, cliente2);

let valor = 200;
contaCorrenteJulia.transferir(valor, contaCorrente2);

console.log(ContaCorrente.numeroContas);
console.log(contaCorrenteJulia);
// console.log(cliente1);
