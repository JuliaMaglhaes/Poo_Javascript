//node ./index.js
//Para criar o pacote json, abrir terminal ->
// npm init
// por nome do projeto
// no json por "type": "module",

import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
import{ContaPoupanca} from "./ContaPoupanca.js"

const cliente1 = new Cliente("Júlia", "11111111111");
const contaCorrenteJulia = new ContaCorrente(cliente1, 1001);
contaCorrenteJulia.depositar(200);
const valorSacado = contaCorrenteJulia.sacar(50);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

// console.log(ContaCorrente.numeroContas);
// console.log(contaCorrenteJulia);
console.log(contaPoupanca);
