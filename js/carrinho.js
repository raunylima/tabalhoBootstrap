// add comportamento ao botao de lixeira

// calcula o somatorio do valor de todos os produtos no carrinho
function calculaTotal(){
    let arrayProdutos = JSON.parse(localStorage.getItem("carrinho"));
    let valor = 0;
    for(let i=0; i<arrayProdutos.length; i++){
        valor += arrayProdutos[i].preço * quantidade;
    }
    return valor;
}

function listaCarrinho(){

}//lista carrinho

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
                        <div class="input-group mb-3 p-3">
                            <input type="number" class="form-control" value=1>
                            <button type="button" class="btn btn-outline-danger">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div> <!-- input-group mb-3-->
                        <div class="mt-2 text-end p-2">
                            <span>Valor do Item: R$ ${arrayProdutos[i].preco}.00</span>
                        </div> <!-- mt-2 text-end -->
                    </div> <!-- col3 controles-->
                </div><!-- row -->
            </li> <!-- item1-->
    `



    }

    
    // colocar o total embaixo
    listaCarrinho.innerHTML += total
}