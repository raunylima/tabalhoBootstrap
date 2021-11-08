function teste(){
    console.log("oi")
}

// função para setar os dados relacionados ao cep para nada
function limpaFormCep() {
    $("#uf").val("");
    $("#localidade").val("");
    $("#logradouro").val("");
    $("#bairro").val("");
    $("#complemento").val("");
    $("#noRes").val("");
    $("ptRef").val("");
}//limpa form

// executa quando o campo do cep perde o foco
$("#cep").blur(function () {
    // validação cep
    let cep = $("#cep")
    let cepVal = cep.val().replace("-", "")

    // consultando a api
    $.getJSON("https://viacep.com.br/ws/" + cepVal + "/json/?callback=?", function (dados) {
        if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#complemento").val(dados.complemento);
            $("#localidade").val(dados.localidade);
            $("#uf").val(dados.uf);
        } //end if.
        else {
            //CEP pesquisado não foi encontrado.
            limpa_formulário_cep();
            mostrarModal("CEP invalido")
        }//else
    })//getJson
}) //blur


function mostrarModal(textoErro){
    let modal = $("#modalAlerta")
    $("#textoModal").text(textoErro)
    new bootstrap.Modal(modal).show()
}

function modalContrato(){
    let modal = $("#termosContrato");
    new bootstrap.Modal(modal).show()
}

function modalSucesso(){
    let modal = $("#modalSucesso")
    new bootstrap.Modal(modal).show()
}

function validaCpf(cpf) {
    let valor = cpf.replaceAll('.', "")
    valor = valor.replace("-", "")

    // se o valor nao tive tamanho 11 ou se pertencer aos numeros proibidos
    if(valor.length < 11){
        return false;
    }
    if (["00000000000", "11111111111", "22222222222", "33333333333",
        "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"].includes(valor)) {
        return false;
    }

    let v1 = 0
    for (let i = 0; i < 9; i++) {
        v1 += parseInt(valor[i]) * (10 - i);
    }

    // vendo se o resto deu igual a 10
    if ((v1 * 10) % 11 == 10) {
        v1 = 0;
    }

    let v2 = 0
    for (let i = 0; i < 10; i++) {
        v2 += parseInt(valor[i]) * (11 - i);
    }

    // vendo se o resto deu igual a 10
    if ((v2 * 10) % 11 == 10) {
        v2 = 0;
    }

    // verificando com o 1º dig verificador
    if ((v1 * 10) % 11 != valor[9]) {
        return false;
    }
    // verificando com o 2º dig verificador
    if ((v2 * 10) % 11 != valor[10]) {
        return false;
    }

    return true;
} //valida cpf



function enviarDados() {
    // // validação nome
    let nome = $("#nome").val()
    if(nome.length < 3){
        $("#nome").focus()
        $("#nome").addClass(["border", "border-danger"])
        mostrarModal("O nome deve possuir pelo menos 3 letras")
        return false;
    }
    $("#nome").removeClass("border-danger").addClass("border-success")
    // // validação nome

    // validação cpf
    let cpf = $("#cpf").val()
    if(!validaCpf(cpf)){
        mostrarModal("O Cpf digitado é inválido, por favor, digite um Cpf válido")
        $("#cpf").focus()
        $("#cpf").addClass(["border", "border-danger"])
        return false;
    }
    $("#cpf").removeClass("border-danger").addClass("border-success")
    // validação cpf

    // validação data nascimento caso esteja vazia
    if($("#dtNascimento").val() == ""){
        mostrarModal("Digite uma data de nascimento")
        $("#dtNascimento").focus()
        $("#dtNascimento").addClass(["border", "border-danger"])
        return false;
    }
    $("#dtNascimento").removeClass("border-danger").addClass("border-success")
    
    // validação dos valores do campo da data de nascimento
    let data = new Date($("#dtNascimento").val())
    let hj =  Date.now()
    let diff = Math.abs(hj - data)
    let idade = (Math.floor((Math.ceil(diff / (1000 * 60 * 60 * 24))/365)))
    if(idade < 18){
        mostrarModal("Você não tem a idade mínima exigida para se cadastrar.")
        $("#dtNascimento").focus()
        $("#dtNascimento").addClass(["border", "border-danger"])
        return false;
    }
    $("#dtNascimento").removeClass("border-danger").addClass("border-success")
    // validação data nascimento

    // validação dos valores do email
    let email1 = $("#email")
    let email2 = $("#email2")

    if(email1.val() == "" || email2.val() == ""){
        mostrarModal("Os emails digitados não estão corretos")
        $(email1).focus()
        $(email1).addClass(["border", "border-danger"])
        $(email2).addClass(["border", "border-danger"])
        return false;
    }
    $(email1).removeClass("border-danger").addClass("border-success")
    $(email2).removeClass("border-danger").addClass("border-success")

    // vendo se os emails são iguais
    if($(email1).val() != $(email2).val()){
        mostrarModal("Os emails digitados não conferem, verifique-os.")
        $(email1).focus()
        $(email1).addClass(["border", "border-danger"])
        $(email2).addClass(["border", "border-danger"])
        return false;
    }
    $(email1).removeClass("border-danger").addClass("border-success")
    $(email2).removeClass("border-danger").addClass("border-success")
    // validação email

    // validação telefone
    let tel = $("#telefone")
    if(tel.val() == ""){
        mostrarModal("Digite um número de telefone, por favor.")
        $(tel).focus()
        $(tel).addClass(["border", "border-danger"])
        return false;
    }
    $(tel).removeClass("border-danger").addClass("border-success")
    // validação telefone

    //validação das senhas
    let senha1 = $("#senha")
    let senha2 = $("#senha2")
    // vendo se as senhas batem
    if ((senha1.val() != senha2.val()) || (senha1.val()=="" || senha2.val()=="")){
        mostrarModal("As senhas digitadas não conferem, verifique-os e insira novamente com cuidado")
        $(senha1).focus()

        $(senha1).addClass(["border", "border-danger"])
        $(senha2).addClass(["border", "border-danger"])
        return false
    }//if
    $(senha1).removeClass("border-danger").addClass("border-success")
    $(senha2).removeClass("border-danger").addClass("border-success")
    // validação das senhas

    // validação cep
    let cep = $("#cep")
    let cepVal = cep.val().replace("-", "")
    if(cepVal.length != 8){
        mostrarModal("Digite um cep válido, por favor.")
        $(cep).focus();
        $(cep).addClass(["border", "border-danger"])
        return false;
    }
    $(cep).removeClass("border-danger").addClass("border-success")

    // validação do checkbox
    let ck = $("#termosContrato");
    if(ck[0].checked == false){
        mostrarModal("Você deve estar de acordo com os termos de serviço para continuar")
        return false;
    }

    {
        // modalSucesso();
        alert("Dados enviados, com sucesso")
        return true;
    }
}