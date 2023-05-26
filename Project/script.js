const Show = document.querySelector('.Product-container')
const MensProduct = document.querySelector('.Mens')
const HomeProduct = document.querySelector('.Home')
const WomenProduct = document.querySelector('.Women')



MensProduct.addEventListener('click', App)
HomeProduct.addEventListener('click', AllProductData)
WomenProduct.addEventListener('click', Womens)






async function AllProductData(){
    const res = await fetch(`https://fakestoreapi.com/products`)
    const Data = await res.json()
    AllProduct(Data)
    
}
AllProductData()



function AllProduct(Data){
    Show.innerHTML = ''
    let Card = document.createElement('div')
    Card.classList.add('card')
    Data.forEach(elem => {
        let products = `<div class="Product-Details">
        <img class="Product-Image" src="${elem.image}" alt="">
        <h3>${elem.title}</h3>
        <p>Price '$': ${elem.price}</p>
        <p>Rating: ${elem.rating.rate} <span class="fa fa-star checked"></span></p>
        </div>
    `
    Card.innerHTML += products
    });
     Show.appendChild(Card)
}


function App(){
    // console.log(object[0].title)
    Show.innerHTML=''
    let Card = document.createElement('div')
    Card.classList.add('card')
    object.forEach(elem => {
        let products = `<div class="Product-Details">
        <img class="Product-Image" src="${elem.image}" alt="">
        <h3>${elem.title}</h3>
        <p>Price '$': ${elem.price}</p>
        <p>Rating: ${elem.rating.rate} <span class="fa fa-star checked"></span></p>
        </div>
    `
    Card.innerHTML += products
    });
     Show.appendChild(Card)
}

function Womens(){
    // console.log(object[0].title)
    Show.innerHTML=''
    let Card = document.createElement('div')
    Card.classList.add('card')
    obj.forEach(elem => {
        let products = `<div class="Product-Details">
        <img class="Product-Image" src="${elem.image}" alt="">
        <h3>${elem.title}</h3>
        <p>Price '$': ${elem.price}</p>
        <p>Rating: ${elem.rating.rate} <span class="fa fa-star checked"></span></p>
        </div>
    `
    Card.innerHTML += products
    });
     Show.appendChild(Card)
}

