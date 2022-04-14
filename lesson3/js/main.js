const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = data;
//                 console.log(data);
                 this.render()
            });
    }
  
    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
        //    this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
    renderBasket(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>                   
                </div>
            </div>`
    }
}

let list = new ProductsList();
console.log(list.allProducts);

class Basket {
    constructor(container = '.basket'){
        this.container = container;
        this.basketGoods = [];//массив товаров из JSON документа
        this.getBasketGoogs()
            .then(data => { //data - объект js
                 this.basketGoods = data['contents'];
                console.log(data['contents']);
                 this.render()
            });
        this.openCloseBasket();    
    }
   
    getBasketGoogs(){
      
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });       
    }
    render(){
        const blockBasket = document.querySelector(this.container);
        for (let product of this.basketGoods){
            const basketObj = new ProductItem(product);
//            this.allProducts.push(productObj);
              blockBasket.insertAdjacentHTML('beforeend', basketObj
              .renderBasket());
        }
    }
    openCloseBasket(){
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.basket').classList.toggle('hidden');
        });
    }
}
let basketList = new Basket();