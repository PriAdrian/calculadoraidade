function calcular(event) {
    // Previne o recarregar da página
    event.preventDefault()

    console.log("Foi executada a função calcular")

    // Passo 1
    let usuario = receberValores()

    // Passo 2
    let IdadeCalculado = calcularIdade(usuario.ano, usuario.mes, usuario.dia)

    // Passo 3
    let classificacaoIdade = classificarIdade(idadeCalculado)

    console.log(classificacaoIdade)

    // Passo 4
    usuario = organizarDados(usuario, IdadeCalculado, classificacaoidade)

    // Passo 5
    cadastrarUsuario(usuario)

    // Esse
    carregarUsuarios()

    // Ou
    // window.location.reload()

}

function receberValores() {
    let nomeRecebido = document.getElementById("nome").value
    let anoRecebida = document.getElementById("ano").value
    let mesRecebido = document.getElementById("mes").value
    let diaRecebido = document.getElementById("dia").value

    let dadosUsuario = {
        nome: nomeRecebido,
        ano: anoRecebida,
        mes: mesRecebido,
        dia: diaRecebido
    }

    console.log(dadosUsuario)

    return dadosUsuario
}

function calcularIdade(ano, mes, dia) {
    //Calcular ano atual
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear()

    let Idade = (anoAtual - ano)

    console.log(Idade)

    return Idade

}

function classificarIdade(Idade) {

    //    Resultado            Faixa
    //    0 à 12                Criança
    //    13 à 17                Adolescente
    //    18 à 65               Adulto
    //    Acima de 65         Idoso




    if(idade >= 0 && idade <=12) {
        return "crianca"
  }else if (idade>= 13 && idade < 17)
        return "adolescente"{
 }else if (idade >=18 && idade < 65) {
    return "adulto"
 }else{
    return"idoso"
 }

function organizarDados(dadosUsuario, valorIdade, classificacaoIdade) {
    // Pegar a idade atual
    let dataHoraAtual = new Intl.DateTimeFormat('pt-BR', { timeStyle: 'long', dateStyle: 'short' }).format(Date.now())

    console.log(dataHoraAtual);

    // Organizando o objeto para salvar
    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        Idade: valorIdade,
        situacaoIdade: classificacaoIdade,
        dataCadastro: dataHoraAtual
    }

    return dadosUsuarioAtualizado;
}

function cadastrarUsuario(dadosUsuario) {
    let listaUsuarios = []

    // Se houver uma lista de usuarios no localStorage, carregar isso para a variavel listaUsuarios
    if (localStorage.getItem("usuariosCadastrados") != null) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }

    // Adiciona o usuario na lista de usuarios
    listaUsuarios.push(dadosUsuario)

    // Salva a listaUsuarios no localStorage
    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))

}

function carregarUsuarios() {
    let listaCarregada = []

    if (localStorage.getItem("usuariosCadastrados") != null) {
        listaCarregada = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }

    if (listaCarregada.length == 0) {
        // Se não tiver nenhum usuario cadastrado, mostrar mensagem
        let tabela = document.getElementById("corpo-tabela")

        tabela.innerHTML = `<tr class="linha-mensagem">
            <td colspan="6">Nenhum usuario cadastrado ☹ </td>
        </tr>`

    } else {
        // Montar conteudo da tabela
        montarTabela(listaCarregada)
    }

    console.log(listaCarregada)
}

window.addEventListener("DOMContentLoaded", () => carregarUsuarios())

// Passo 7
function montarTabela(listaUsuarios) {
    let tabela = document.getElementById("corpo-tabela")

    let template = ""

    listaUsuarios.forEach(usuario => {
        template += `<tr>
            <td data-cell="nome">${usuario.nome}</td>
            <td data-cell="data de nacimento">${usuario.dia}/${usuario.mes}/${usuario.ano}</td>
            <td data-cell="valor do Idade">${usuario.Idade.}</td>
            <td data-cell="classificação do Idade">${usuario.situacaoIdade}</td>
          
        </tr>`
    })

    tabela.innerHTML = template;
}

function deletarRegistros() {
    // Remove o item do localStorage
    localStorage.removeItem("usuariosCadastrados")

    // Recarrega a página
    window.location.reload()
}