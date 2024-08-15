import {drawProduct} from "./drawProduct.js";
import {pragram} from "./pramga.js";
import {error} from "./error.js";

drawProduct();

let btn = document.querySelector("button");
let input = document.querySelector(".search input");
btn.addEventListener("click", async () => {
    pragram.q = input.value;
    pragram.next = 1;
    await drawProduct();
});

input.onkeydown = async (e) => {
    if (e.key === 'Enter') {
        pragram.q = input.value;
        pragram.next = 1;
        await drawProduct();
    }
}

let next = document.querySelector(".button-next");
let prev= document.querySelector(".button-prev");
next.addEventListener('click', async (e) => {
    let span = document.querySelector(".product span");
    // console.log(span);
    if(span === null || pragram.next == 0) {
        pragram.next += 1;
        await drawProduct();
    }
})

prev.addEventListener('click', async (e) => {
    let span = document.querySelector(".product span");
    if(span === null || pragram.next != 0) {
        pragram.next -= 1;
        await drawProduct();
    }
})

let select = document.querySelector(".select");
select.addEventListener('change', () => {
    let val = select.value;
    if(val == 'desc') {
        pragram.order = 'desc';
        pragram.sort = 'price';
    } else if(val == 'asc') {
        pragram.order = 'asc';
        pragram.sort = 'price';
    } else if(val == 'default') {
        pragram.order = '';
        pragram.sort = '';
    } else {
        pragram.order = 'desc';
        pragram.sort = 'discountPercentage';
    }
    let span = document.querySelector(".product span");
    if(span === null)
        pragram.next = 1;
        drawProduct();
})
