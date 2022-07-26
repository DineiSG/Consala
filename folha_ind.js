import calc from 'readline-sync'


//Solicitação de dados para calculo da folha individual//
let nome_colab=calc.question("Informe o nome completo do colaborador: ")
let funcao_colab=calc.question("Informe a funcao: ")
let remuneracao_colab=calc.question("Informe o salario: ")
let faltas_dia=calc.question("N. de faltas no mes: ")

//Calculos referentes ao colaborador//
let conversao_sal=parseInt(remuneracao_colab)
let conversao_desc_dia=parseInt(faltas_dia)
let descDia=(conversao_sal / 30) * conversao_desc_dia

//Calculo de desconto de INSS//
function INSS(){
  if(conversao_sal <= 1556.94){
     let desc_INSS_1=conversao_sal * 8 / 100
     return desc_INSS_1
    }
    else if (conversao_sal > 1556.94 <= 2594.92){
        let desc_INSS_2=conversao_sal * 9 /100
        return desc_INSS_2
    }
    else if (conversao_sal > 2594.92 <= 5189.82){
        let desc_INSS_3=conversao_sal * 11 / 100
        return desc_INSS_3
    }
    else{
    console.log("Favor verificar todas as informacoes e retornar")
    }    
}

let desconto_INSS=INSS ()
    

//Montagem do contracheque que será exibido após todos os calculos//

    let dados_colab=[]
    dados_colab.push(`Nome: ${nome_colab}`)
    dados_colab.push(`Funcao: ${funcao_colab}`)
    dados_colab.push(`Remuneracao: R$ ${remuneracao_colab}`)
    dados_colab.push(`Dias descontados: ${faltas_dia}`)
    dados_colab.push(`Valor descontado por faltas: R$ ${descDia.toFixed(2)}`)
    dados_colab.push(`INSS: ${desconto_INSS} `)

for(let dados in dados_colab){    
    console.table(dados_colab[dados])
}










