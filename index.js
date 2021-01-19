//node ./index.js
//Para criar o pacote json, abrir terminal ->
// npm init
// por nome do projeto
// no json por "type": "module",

import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./Contas/ContaCorrente.js"
import{ContaPoupanca} from "./Contas/ContaPoupanca.js"
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

//Aula 1
// import{Gerente} from "./Funcionarios/Gerente.js"
// import{Diretor} from "./Funcionarios/Diretor.js"

// const cliente1 = new Cliente("Júlia", "11111111111");
// const contaCorrenteJulia = new ContaCorrente(cliente1, 1001);
// contaCorrenteJulia.depositar(200);
// const valorSacado = contaCorrenteJulia.sacar(50);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

// // console.log(ContaCorrente.numeroContas);
// // console.log(contaCorrenteJulia);
// console.log(contaPoupanca);

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);