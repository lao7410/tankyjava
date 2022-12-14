const Products = [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];



//Eventos Click
const setQuantity = () => {
    const label = document.querySelector('#cart-quantity');
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (total > 0) {
        label.innerText = total;
    }
}
const notification = (text) => {
    Toastify({
        text: text,
        className: "info",
        style: {
            background: "#fff",
            color: "#00a650"
        }
    }).showToast();
}

// Click event
const loadEvents = () => {
    let buttons = document.querySelectorAll('.button');
    for (const button of buttons) {
        button.addEventListener('click', () => {
            let found = cart.find(element => element.id == button.id);
            if (found) {
                // esta en el carrito
                found.quantity++;
                localStorage.setItem('cart', JSON.stringify(cart));
                notification('Producto agregado con éxito!')
            }
            else {
                let product = Products.find(element => element.id == button.id);
                if (product) {
                    let newProduct = {
                        id: product.id,
                        name: product.nombre,
                        price: product.price,
                        line: product.linea,
                        description: product.caracteristicas,
                        image: product.image,
                        quantity: 1
                    }
                    cart.push(newProduct);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    notification('Producto agregado con éxito!');
                }
            }
            setQuantity(cart);
        })
    }
}
// CARGA DINAMICA DE DATOS EN HTML- DOM
const loadProducts = (Products) => {
    let container = document.querySelector('#container');
    for (const product of Products) {
        let div = document.createElement('div');
        div.setAttribute('class', 'card', 'card-body');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.caracteristicas}">
            <h2 class="card-title">${product.nombre}</h2>
            <h4>${product.caracteristicas}</h4>
            <h3>${product.price}</h3>
            <button class="button" id="${product.id}">Agregar al carrito</button>
        `;
        container.appendChild(div);
    }
    loadEvents();
}
const getData = async () => {
    try {
        const response = await fetch('../base_datos/data.json');
        const data = await response.json();
        loadProducts(data);
        Products.push(...data);
        setQuantity();
    }
    catch (e) {
        console.log(e);
    }
}
getData();

//filtrar
const searchProduct=()=>{
    debugger
    const input = document.getElementById('filter').value.toUpperCase()
    const cardContainer = document.getElementById('container')
    const cards = cardContainer.getElementsByClassName('card')
    
    for(let i=0; i < cards.length; i++){
        let title = cards [i].querySelector("h2.card-title")
        /* console.log(title) */
        if(title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].getElementsByClassName.display="";

        }else {
            cards[i].getElementsByClassName.display="none";
        }
    }
    /* document.querySelector('#filter') */


}


