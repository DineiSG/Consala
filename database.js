import teste from 'readline-sync'

let acesso=teste.question("Informe um usuario e senha: ")



let Acessos=[
    {usuario:"José Silva", senha:"mingau"},
    {usuario:"Ana Silva", senha:"coxinha"},
    {usuario:"Fernando Limeira", senha:"palmito"}
]


console.log("Banco de dados disponíveis:\nUsuarios\nFuncionarios")

let alternativa=teste.question("Gostaria de consultar qual Banco de Dados ? ")





let Usuarios=[
    {nome:"José Roberto Silva", matricula:3550, perfil:"Padrao"},
    {nome:"Ana Clara Silva", matricula:4890, perfil:"Administrador"},
    {nome:"Fernando Limeira", matricula:5050, perfil:"Padrão"}
]



let Funcionarios=[
    {nome:"Carlos André Moreira", matricula:1001, funcao:"Auxiliar Operacional", remuneracao:1500.50},
    {nome:"Gabriel Loureiro", matricula:3510, funcao:"Auxiliar Operacional", remuneracao:1500.50},
    {nome:"Robert Fernan Loureiro", matricula:2314, funcao:"Motorista", remuneracao:1800.10},
    {nome:"Luiz Alves Santos", matricula:7481, funcao:"Auxiliar de Limpeza", remuneracao:1300.50},
    {nome:"Maria Fernanda", matricula:4414, funcao:"Assistente de Logistica", remuneracao:1650.30},
    {nome:"Daniela Andrade", matricula:2010, funcao:"Assistente de Logistica", remuneracao:1650.30},
    {nome:"Mauricio Santos", matricula:1031, funcao:"Lider Operacional", remuneracao:2000.50},
    {nome:"José Roberto Silva", matricula:3550, funcao:"Gerente Operacional", remuneracao:2500.10},
    {nome:"Ana Clara Silva", matricula:4890, funcao:"Analista de RH", remuneracao:1900.10},
    {nome:"Fernando Limeira", matricula:5050, funcao:"Gerente Geral", remuneracao:3000.10}
]

if(Acessos===true){

    switch(alternativa)
    {
        case "Usuarios":
            console.table(Usuarios)
            break;
        case "Funcionarios":
            console.table(Funcionarios)
            break;
        case "Nenhum":
            console.log("Obrigado !")
    }
}
else{
    console.log("Até a Proxima !!")
}

export default (Usuarios,Funcionarios,Acessos) 
 
