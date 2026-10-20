//console.log() mostra uma informação no console
console.log("Olá, mundo");
console.log(2 +"2");
console.log(6 + " 7")

console.log(typeof "olá, mundo") //string
console.log(typeof 22) //number
console.log(typeof 10,5) //number
console.log(typeof true) //booolean
console.log(typeof false) //boolean

//variavel
//const nao pode ter seu valor alterado durante o programa
const nome = "Anthony"
console.log(nome)


let idade = 17;
console.log(idade)
console.log ("Ola " + nome + ", que tem " + idade + " anos.");



idade = 18;
console.log(idade)

console.log(`Óla ${nome}, que tem ${idade} anos.`);






let nome2 = "Raquel"
console.log(nome2)

let peso = 60+"kg";
console.log(peso)

console.log(`Óla ${nome2}, que tem ${peso} kg.`);

nome2 = "Maria"
console.log(nome2)

peso = 75+"kg"
console.log(peso)

console.log(`Óla ${nome2}, que tem ${peso} peso.`);


//metodos de string

const texto = "JavaScript"

//conta quantas caracterias a string tem
console.log(texto.length)

//altera todas as letras para maiusculo
console.log(texto.toUpperCase())

//altera todas as letras para minusculo
console.log(texto. toLowerCase())

const nome_completo = "Marcos Vinicius Oliveira dos Santos"

console.log(nome_completo.includes("Santos")) //true

console.log(10 > 5)

console.log(10 < 5) //false

console.log(10 >= 10)

console.log(10 <= 5)

console.log("10" == 10)

console.log("10" === 10)

console.log(10 !== 5)


const idade_pessoa = 17

console.log(idade_pessoa >= 18)
console.log(idade_pessoa >= 16)


//meu
const nome_completo2 = "Agda Izabel Farias da Silva"
console.log(nome_completo2 == "agda izabel farias da silva")

const nome_completo3 = "Izabel"

console.log(nome_completo2 == "Izabel")  

//coletamos a idade da pessoa

let pessoa_idade = 15;

//verificar se a idade é maior que 18

if(pessoa_idade >=18){

//se maior ou igual que 18 então ela é maior de idade

    console.log("não pode💩")

} else{
    //senão, então ela é menor de idade
console.log("não vai entrar😒")
}

//coletamos a idade da pessoa 
let idade_votacao = 10
//verificar se a pessoa é maior que 70
if(idade_votacao > 70){
    console.log("você não é obrigado a votar!")
} else if (idade_votacao >= 18){

    //senão se a idade da  pessoa for maior ou igual a 18
    console.log("você tem que votar obrigatoriamente!")
}else if(idade_votacao >= 16){

    //senão se a idade da pessoa for maior ou igual a 16
    console.log("você não é obrigado a votar, mas caso queira pode!")
}else{

    //senão for nenhuma das alternativas anteriores3
    console.log("você não pode votar!")
}

//PARTE 1 - APROVACAO ESCOLAR

let notas = 6
if (notas >=7){
    console.log("você foi aprovado!👍😁")
}else{  
    console.log("reprovado💩")}


// COMPARACAO DE DOIS NUMEROS

let numero1 = 1
let numero2 = 10
if(numero1>numero2){
    console.log(`o numero1 é maior que o ${numero2}`)
}
else if (numero2>numero1){
    console.log(`o numero2 é maior que o ${numero1}`)
}

else if(numero1 = numero2){
    console.log(`os dois numeros são iguais`)
}

//VERIFICACAO DE SENHA
let senha_senai = "senai123"
// const senha_senai = "senha123"
if(senha_senai == "senai123"){

    console.log("senha correta👍")
}else{
    console.log("incorreto 💩")
}


// PARTE2 - MULTIPLOS CAMINHOS - CLASSIFICAÇÃO DE TEMPERATURA

let tempo = 11

if (tempo < 18){
    console.log(`frio🥶`)}

else if (tempo <= 27){
    console.log(`Agdradavel😍`)
}

else{
console.log(`quente🔥`)
}

//CLASSIFICAÇÃO DE NOTA

let nota = 5

if (nota > 8 ){
    console.log(`Excelente😍`)
}
else if (nota >= 7){
    console.log(`Bom👍`)
}
else if (nota >= 5){
    console.log(`regular👌`)
}
else{ 
    console.log("insuficiente😒")
}

//DIAS DA SEMANA

const dia = 4;

if (dia === 1) {
  console.log("Domingo");
} 
else if (dia === 2) {
  console.log("Segunda-feira");
} 
else if (dia === 3) {
  console.log("Terça-feira");
} 
else if (dia === 4) {
  console.log("Quarta-feira");
} 
else if (dia === 5) {
  console.log("Quinta-feira");
} 
else if (dia === 6) {
  console.log("Sexta-feira");
} 
else if (dia === 7) {
  console.log("Sábado");
} 
else {
  console.log("Dia inválido");
}

// AULA PROFESSOR

let idade_dirigir = 15
let tem_cnh = true
let tem_carro = false

if(idade_dirigir >= 18 && tem_cnh == true && tem_carro == true){
    console.log("Você pode dirigir")
}
else{
    console.log("Você não pode dirigir!")
}


let é_professor = true
let é_aluno = false

if(é_professor == true || é_aluno == true){
    console.log("Você tem direito a meia entrada")
} else{
    console.log("Você não tem direito a meia entrada!")
}

// && = e
// || = ou 

// ATIVIDADE

// 1 - NUMERO DENTRO INTERVALO

let valor= 51


if(valor >= 10 && valor <= 50){
    console.log("seu numEro esta entre 10 e 50")
}else{
    console.log("seu numero esta fora do intervalo")
}

// ELEGIBILIDADE PARA ESTAGIO

let idade1 = 17

if( idade1 > 16 && idade1 <= 26){
    console.log("voce atende ao requisito")
} else{
    console.log ("voce nao atende aos requisitos")
}

// FRETE GRATIS

let valor_compra = 100
let E_assinante = false

if(valor_compra >= 200 || E_assinante == true){
    console.log("voce tem direito a frete gratis")
} else{
    console.log("voce nao tem direitos a frete gratis")
}

// DIA DE DESCANSO

let dias_da_semana = "segunda"

if( dias_da_semana == "sabado" || dias_da_semana == "domingo"){
    console.log("fim de semana")
} else{
    console.log("dia util")
}

// PROMOCAO ESPECIAL

let valor = 150
let desconto = 


