// add comportamento ao botao de lixeira
let arrayProdutos = JSON.parse(localStorage.getItem("carrinho"));
console.log(arrayProdutos);

// calcula o somatorio do valor de todos os produtos no carrinho
function calculaTotal(){
    let arrayProdutos = JSON.parse(localStorage.getItem("carrinho"));
    let valor = 0
    let quantidades = document.querySelectorAll("input")
    // console.log(quantidades)

    let i=0
    quantidades.forEach(element => {
        arrayProdutos[i].qntd = parseInt(element.value)
        valor += parseInt(element.value) * arrayProdutos[i].preco
        i++
    });

    localStorage.setItem("carrinho", JSON.stringify(arrayProdutos));
    $("#valorTotal").text("Valor Total: R$"+ valor +",00")
}

// deleta um produto do carrinho baseado na comparação de indice
function deletaItem(id){
    // console.log("entrei pra deletar")
    let arrayProdutos = JSON.parse(localStorage.getItem("carrinho"));

    for(let i=0; i<arrayProdutos.length; i++){
        if(arrayProdutos[i].id == id){
            // temos que excluir
            arrayProdutos.splice(i,1)
        }
    }
    localStorage.setItem("carrinho", JSON.stringify(arrayProdutos));
    document.location.reload(true)
}

function exibeCarrinho(){
    let listaCarrinho = document.getElementById("listaCarrinho");
    let arrayProdutos= JSON.parse(localStorage.getItem("carrinho"));
    

    let total = `
            <li class="list-group-item my-2 py-3">
                <div class="text-end fw-bold">
                    <p id="valorTotal">Valor Total: R$00,00</p>
                    <a href="#" class="btn btn-primary btn-sm">Continuar Comprando</a>
                    <button class="btn btn-primary btn-sm">Finalizar Compra</button>
                </div><!-- text-end-->
            </li><!-- item2 (o subtotal)-->
    `
    for(let i=0; i<arrayProdutos.length; i++){
        listaCarrinho.innerHTML += `
            <li class="list-group-item my-2 py-3">
                <div class="row">
                    <div class="col-lg-2 col-md-3 col-sm-4">
                        <img src="${arrayProdutos[i].foto}" class="img-thumbnail mt-4">
                    </div> <!-- col1 imagem-->

                    <div class="col-lg-7 col-md-9 col-sm-8 align-self-center">
                        <h5 class="fw-bolder">${arrayProdutos[i].nome}</h5>
                        <h5>${arrayProdutos[i].desc}</h5>
                    </div> <!-- col2 texto-->
                    
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="input-group mt-5">
                            <input type="number" class="form-control" value=${arrayProdutos[i].qntd} onblur="calculaTotal()">
                            <button type="button" class="btn btn-outline-danger" onclick="deletaItem(${arrayProdutos[i].id})">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div> <!-- input-group-->
                        <div class="text-end">
                            <span> Valor do Item: R$</span>
                            <span>${parseFloat(arrayProdutos[i].preco).toFixed(2)} </span>
                        </div> <!-- text-end -->
                    </div> <!-- col3 controles-->
                </div><!-- row -->
            </li> <!-- item1-->
    `
    }

    
    // colocar o total embaixo
    listaCarrinho.innerHTML += total
    calculaTotal();
}