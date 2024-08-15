import {PRODUCT_API} from "./constants.js";
import {pragram} from "./pramga.js";
import {fetchApi} from "./fetchApi.js";
import {error} from "./error.js";

export var drawProduct = () => {
    let api = `${PRODUCT_API}?_limit=24&_page=${pragram.next}&q=${pragram.q}&_sort=${pragram.sort}&_order=${pragram.order}`;
    // console.log(api);
    fetchApi(api)
        .then(data => {
            if(data.length === 0 || pragram.next <= 0) {
                error();
                return;
            }
            let htmls = data.map(product => {
                return `
                     <div class="product-item">
                        <div class="product-image">
                            <img src="${product.thumbnail}" alt="">
                            <div class="product-sale">
                                ${product.discountPercentage}%
                            </div>
                        </div>
                        <div class="product-content">
                            <h3 class="product-title">
                                ${product.title}
                            </h3>
                            <div class="product-meta">
                                <div class="product-price">
                                    ${product.price}$
                                </div>
                                <div class="product-stock">
                                    Còn lại: ${product.stock}
                                </div>
                            </div>
                        </div>
                    </div>
                `
            })
            let div = document.createElement("div");
            let body = document.querySelector('body');
            let productCurrent = document.querySelector('.product');
            div.classList.add('product');
            div.innerHTML = htmls.join("");
            body.replaceChild(div, productCurrent);
        })
}