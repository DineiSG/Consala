import calc from 'readline-sync'


//Solicitação de dados para calculo da folha individual//
let nome_colab=calc.question("Informe o nome completo do colaborador: ")
let funcao_colab=calc.question("Informe a funcao: ")
let remuneracao_colab=calc.question("Informe o salario: ")
let faltas_dia=calc.question("N. de faltas no mes: ")
console.log("\nCONTRACHEQUE DO COLABORADOR------------------------------------------------------------")

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
    console.log("Favor verificar todas as informacoes e informar os dados corretamente.")
    }    
}

let desconto_INSS=INSS()

//Calculo de desconto do Imposto de Renda Retido na Fonte (IRRF)//

function IRRF(){
    if(conversao_sal >=1903.99 <=2826.65){
        let desc_IRRF1=conversao_sal*7.5/100
        return desc_IRRF1
    }
    else if(conversao_sal >=2826.66 <=3751.05){
        let desc_IRRF2=conversao_sal*15/100
        return desc_IRRF2
    }
    else if(conversao_sal >=3751.06 <=4664.68){
        let desc_IRRF3=conversao_sal*22.5/100
        return desc_IRRF3
    }
    else if(conversao_sal >=4664.69){
        let desc_IRRF4=conversao_sal*27.5/100
        return desc_IRRF4
    }
    else{
    console.log("Colaborador nao tem desconto de IRRF pois se encontra abaixo do valor mínimo.")
    }
}
    let desconto_IRRF=IRRF()
    

//Montagem do contracheque que será exibido após todos os calculos//

    let dados_colab=[]
    dados_colab.push(`\nNome: ${nome_colab}  - Funcao: ${funcao_colab} - Remuneracao: R$ ${remuneracao_colab}`)
    dados_colab.push("---------------------------------------------------------------------------------------")
    dados_colab.push("\n                                  INFORMACOES                                        ")
    dados_colab.push("---------------------------------------------------------------------------------------")
    dados_colab.push("\nBONIFICACOES:")
    dados_colab.push(`Horas extras remuneradas 50%: `) //criar variavel//
    dados_colab.push(`Horas extras remuneradas 100%: `) //criar variavel//
    dados_colab.push(`Auxilio combustivel: `)//criar variavel//
    dados_colab.push("---------------------------------------------------------------------------------------")
    dados_colab.push("\nDESCONTOS:")    
    dados_colab.push(`Dias descontados: ${faltas_dia}`)
    dados_colab.push(`Valor descontado por faltas: R$ ${descDia.toFixed(2)}`)
    dados_colab.push(`INSS:R$ ${desconto_INSS} `)
    dados_colab.push(`Imposto de Renda: R$ ${desconto_IRRF}`)
    dados_colab.push("---------------------------------------------------------------------------------------")
    dados_colab.push(`Valor liquido a receber: R$ `)

for(let dados of dados_colab){    
    let contracheque=dados
    console.table(contracheque)
}










