const contenedor = document.querySelector(".container")
/* const URL = '' */
const products = []
const contenidoHTML = ""
const Products=[]

/*Interacciones con HTML*/
const updateCart = (cart) =>{
    let cartContainer =document.querySelector ('#cart')
    let container = document.getElementById ("cartContainer")
    if(container){
        container.parentNode.removeChild(container)
    }
    let div = document.createElement('div')
    div.setAttribute('id','cartContainer')
    div.innerHTML += `<h2>Carrito</h2>`
    for(const product of cart){
        div.innerHTML += `
            <div class="cart-item>
                <h4>Producto:${product.name}</h4>
                <h4>Precio:${product.precio}</h4>
                <h4>Cantidad:${product.quantity}</h4>
            </div>
        `

     }
}

const loadEvents = () =>
{
    let buttons = document.querySelectorAll('.button');
    for (const button of buttons) 
    {
        button.addEventListener('click', ()=>{

            let found = cart.find(element => element.id == button.id);
            if(found)
            {
                // esta en el carrito
                found.quantity++;
                localStorage.setItem('cart', JSON.stringify(cart));
                notification('Producto agregado con éxito!')
            }
            else
            {
                let product = Products.find(element => element.id == button.id);
                if(product)
                {
                    let newProduct = {
                        id:product.id,
                        name: product.name,
                        price: product.price,
                        description: product.description,
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

const loadProducts = (Products) =>
{
    let container = document.querySelector('#container');
    for (const product of Products)
    {   
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.description}">
            <h3>${product.price}</h3>
            <h4>${product.name}</h4>
            <button class="button" id="${product.id}">Agregar al carrito</button>
        `;
        container.appendChild(div);
    }
    loadEvents();
}

/* CARGA DE PRODUCTOS CON FETCH async*/

const cargarProductos= (productos) =>{
    let container = document.querySelector ('#container')
    for (const producto of productos){
        let div =document.querySelector ('div')
        div.setAttribute('class','card')
        div.innerHTML = `
            <img src="${product.image}" alt=${product.descripcion}>
            <h3>${product.precio}</h3>
            <h4>${prduct.name}</h4>
            <button class="button" id="${product.id}">Agregar</button>
        `;
        container.appendChild(div)
    }
}

const getData  = async ()=> {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        cargarProductos(data)
        Products.push(...data)
        
           
    } 
    catch (e) {
        console.log(e)
        /* contenidoHTML += mostrarError() */
    }
    finally {
        /* contenedor.innerHTML = contenidoHTML */
    }
}
getData();