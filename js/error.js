export var error = () => {
    let product = document.querySelector('.product');
    let div = document.createElement('div');
    div.classList.add('product');
    let span = document.createElement('span');
    let body = document.querySelector('body');
    var content = document.createTextNode('Dữ liệu không tồn tại!!!');
    span.appendChild(content);
    div.appendChild(span);
    body.replaceChild(div, product);
}