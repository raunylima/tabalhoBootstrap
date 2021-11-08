function mostrarModal(textoErro){
    let modal = $("#modalAlerta")
    $("#textoModal").text(textoErro)
    new bootstrap.Modal(modal).show()
}//mostrar modal

function modalSucesso(){
    let modal = $("#modalSucesso")
    new bootstrap.Modal(modal).show()
}//modal sucesso

function enviarDados(){
    // validação de nome
    let nome = $("#nome").val()

    if(nome.length < 3){
        $("#nome").focus()
        $("#nome").addClass(["border", "border-danger"])
        mostrarModal("O nome deve possuir pelo menos 3 letras")
        return false;
    }
    $("#nome").removeClass("border-danger").addClass("border-success")
    


    // validação de email
    let email1 = $("#email")

    if(email1.val() == ""){
        mostrarModal("O email digitado não está correto")
        $(email1).focus()
        $(email1).addClass(["border", "border-danger"])
        return false;
    }
    $(email1).removeClass("border-danger").addClass("border-success")

    // validação descrição
    let desc = $("#desc")

    if(desc.val().length < 3){
        mostrarModal("A descrição do seu sabor deve conter ao menos 3 letras");
        $(desc).focus()
        $(desc).addClass(["border", "border-danger"])
        return false;
    }
    $(desc).removeClass("border-danger").addClass("border-success")

    // validação receita
    let rec = $("#floatingTextarea")

    if(rec.val().length < 10){
        mostrarModal("A receita deve conter pelo menos 10 letras, por favor, verifique.")
        $(rec).focus();
        $(rec).addClass(["border", "border-danger"])
        return false;
    }
    $(rec).removeClass("border-danger").addClass("border-success")

    // validação do checkbox
    let ck = $("#termosContrato");
    if(ck[0].checked == false){
        mostrarModal("Você deve estar de acordo com os termos de serviço para continuar")
        return false;
    }

    {
        // modalSucesso()
        alert("Os dados foram enviados com sucesso, você receberá um contato nosso dentro de 4 dias úteis, obrigado.")
        return true;
    }
}