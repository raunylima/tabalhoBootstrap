// simula um banco com as informações dos produtos da nossa loja
// {id:, nome:"", desc:"", foto:"../", preco:},
// <div class="text-center">
//     <h5>Preço: R$5.00</h5>
//     <button class="btn btn-primary" onclick="addItem(0)">Eu Quero</button>
// </div>

produtos = [
    {id:0, nome:"Trufa Vanilla Canela", desc:"Trufa creme de baunilha com chocolate belga e canela", foto:"img/capuccino.jpg", preco:5, qntd:1},
    {id:1, nome:"Break Code", desc:"cremoso chocolate ao leite com pedaços de amêndoas, macadâmia , blueberry e cerejas.", foto:"img/anis.jpg", preco:3, qntd:1},
    {id:2, nome:"Trufas Belgas", desc:"chocolate Belga feito especialmente para você direito da Cacau Code para sua casa", foto:"img/choco-AoLeite (13).jpg", preco:8, qntd:1},
    {id:3, nome:"Bombons Sortidos", desc:"sabores recheados com castanhas , frutas , licores , ganaches", foto:"img/sortido.jpg", preco:20, qntd:1},
    {id:4, nome:"Trufas Cookies", desc:"Trufas brancas recheadas com chocolate intenso belga com cookies", foto:"img/branco4.jpg", preco:6, qntd:1},
    {id:5, nome:"Break Code", desc:"Break Code. Feito chocolate branco , pistache , amêndoas, macadâmia, cranberry e cerejas", foto:"img/bkCode.jpg", preco:3, qntd:1},
    {id:6, nome:"Trufa de Coco", desc:"Trufa de coco cremoso com chocolate branco creme de cacau", foto:"img/brancoCOCO.jpg", preco:3, qntd:1},
    {id:7, nome:"Trufa Capuccino", desc:"Trufa cremosa de capuccino com chocolate branco", foto:"img/branco5.jpg", preco:2, qntd:1},
    {id:8, nome:"Trufa Belga Fran", desc:"Trufas belgas cremosas de chocolate intenso com pedaços de framboesa", foto:"img/truffaCacauFran.jpg", preco:4, qntd:1},
    {id:9, nome:"Trufa Tradicional", desc:"Trufas tradicionais feitas com mais puro cacau brasileiro", foto:"img/dark.jpg", preco:2, qntd:1},
    {id:10, nome:"Trufa Gianduia", desc:"Trufas belgas com gianduia e pedaços avelãs", foto:"img/branco3.jpg", preco:4, qntd:1},
    {id:11, nome:"Bombons cerejas", desc:"Bombons finos com cerejas calda de Cherry blend", foto:"img/cherry2.jpg", preco:4, qntd:1},
    {id:12, nome:"Trufa de chocolate Ruby", desc:"Trufas de chocolate Ruby calda de morango e ganache Ruby", foto:"img/ruby.jpg", preco:8, qntd:1},
    {id:13, nome:"Trufa de chocolate", desc:"Trufa de chocolate Ruby com ganache Ruby", foto:"img/ruby2.jpg", preco:6, qntd:1},
    {id:14, nome:"Break Code", desc:"Feito com cremoso chocolate Ruby com pedaços de amêndoas, macadâmia, blueberry e framboesa.", foto:"img/bkrubi.jpg", preco:3, qntd:1},
    {id:15, nome:"Bombons sortidos", desc:"Bombons sortidos com chocolate Ruby recheados de morango,framboesa, amora com frutas 100% naturais.", foto:"img/buby3.jpg", preco:15, qntd:1},
    {id:16, nome:"Trufa de pistache", desc:"Trufa de pistache e massa de cacau com caju 100% natural e vegetal.", foto:"img/pistache.jpg", preco:5, qntd:1},
    {id:17, nome:"Trufa Cacau", desc:"Trufa Cacau 100%", foto:"img/granola.jpg", preco:3, qntd:1},
    {id:18, nome:"Trufa de Tâmaras", desc:"Trufas com tâmaras, amêndoas e macadâmias com toque de canela e baunilha.", foto:"img/tamaras.jpg", preco:6, qntd:1},
    {id:19, nome:"Trufa de Matcha", desc:"Trufa de Matcha com massa de cacau, tâmaras, uva passa, amêndoas e castanha do pará.", foto:"img/chocoMatcha.jpg", preco:6, qntd:1},
]//produtos


// var arrayCarrinho = []
var arrayCarrinho = JSON.parse(localStorage.getItem("carrinho"));

// poe o item dentro do arraycarrinho
function poeCarrinho(item){
    // percorrendo o carrinho vendo se ja tem um item
    // ver os tipos
    for(let i=0; i<arrayCarrinho.length; i++){
        if(arrayCarrinho[i].id == item.id){
            // já tem um no carrinho, não precisamos add ele no carrinho
            return
        }
    }
    // o produto não existe dentro do carrinho, logo podemos add ele
    arrayCarrinho.push(item)
}//poeCarrinho

// colocando o item no carrinho
function addItem(id){

    let item = produtos[id];
    poeCarrinho(item);
    console.log(arrayCarrinho)

    localStorage.setItem("carrinho", JSON.stringify(arrayCarrinho));
}//addItem

