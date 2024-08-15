import { CATEGORY_API } from "./constants.js";
import {fetchApi} from "./fetchApi.js";
import {pragram} from "./pramga.js";
import {drawProduct} from "./drawProduct.js";

let category = async () => {
    await fetchApi(CATEGORY_API)
        .then(data => {
            let htmls = data.map(item => {
                return `
                <li>${item}</li>
            `
            });
            let div = document.createElement("div");
            let ul = document.createElement("ul");
            let productList = document.querySelector('.product-list');
            let body = document.querySelector('body');
            ul.innerHTML = htmls.join("");
            ul.classList.add('category-list');
            div.classList.add('container');
            div.appendChild(ul);
            body.insertBefore(div, productList);
        })
}

await category();
let liList = document.querySelectorAll("li");
[...liList].forEach(item => {
    item.addEventListener('click', async (e) => {
        pragram.q = item.textContent;
        pragram.next = 1;
        await drawProduct();
    })
})


