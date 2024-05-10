console.log("----A");
const teste = 50;

// LET usado para declarar variáveis que os valores podem se retribuidos
let C = 0;
C = 10;
console.log(C);

const notaMedia = 6;

if(notaMedia >=6){
    alert("Aluno PASSOU");
    //aqui vai o código
}
else if(notaMedia >= 4 && notaMedia < 6){
    alert("aluno quase passou")
}

else{
    alert("Aluno reprovou!");
    //se não, faça outra coisa
    //(aqui vai o código)
}

// -------OPERADORES-------
// = sinal de atribuição
// == sinal de comparação
// === Verifica se os dois são iguais e tem o mesmo tipo de dados
// != se é diferente(compara)
// !== se é estritamente
// > maior
// < menor

const professor =  "João";
if(professor == "Lucas"){
    console.log('Sim é Lucas')
}
else {
    console.log('Não é Lucas')
}























// o vento DOM é acionado quando todo o HTML foi completamente carregado
document.addEventListener('DOMContentLoaded', function(){
   

    //Tipos de Dados
    //string: Sequencia de caracter 
    //Number: números inteiros ou pontos flutuantes (10.4)
    //Boolean: Retorna dois valores, true ou false
    //object: estrutura de dados que pode armazenar múltiplos valores
    //NULL: quando está vazio
    //array: objeto especial ordenado
    //function: bloco de código reutilizável

    //var A = 0;
    
    //Const: usado para declarar uma variavel  cujo valor é permanente 
    //const teste = 50;

    // LET usado para declarar variáveis que os valores podem se retribuidos
    //let C = 0;
   //C = 10;
    //console.log(C);
})