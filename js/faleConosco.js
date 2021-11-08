function mostrarModal(textoErro){
    let modal = $("#modalAlerta")
    $("#textoModal").text(textoErro)
    new bootstrap.Modal(modal).show()
}//mostrar modal

let contrato = `Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss deixa as pessoas mais interessantis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.\n

Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.\n

Per aumento de cachacis, eu reclamis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Cevadis im ampola pa arma uma pindureta.\n

Interagi no mé, cursus quis, vehicula ac nisi. Aenean aliquam molestie leo, vitae iaculis nisl. Si num tem leite então bota uma pinga aí cumpadi! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!"`

$("#contrato").click(() => {
    console.log("oi")
    let modal = $("#modalAlerta");
    $("#textoModal").text(contrato)
    $("#staticBackdropLabel").text("Contrato e termos do cliente")
    new bootstrap.Modal(modal).show()
})

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