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

//Montagem do contracheque que será exibido após todos os calculos//
let dados_colab=[]
dados_colab.push(`Nome: ${nome_colab}`)
dados_colab.push(`Funcao: ${funcao_colab}`)
dados_colab.push(`Remuneracao: R$ ${remuneracao_colab}`)
dados_colab.push(`Dias descontados: ${faltas_dia}`)
dados_colab.push(`Valor descontado: R$ ${descDia.toFixed(2)}`)

console.log(dados_colab)











