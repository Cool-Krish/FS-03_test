const Show = document.querySelector('.Product-container')







async function AllProductData(){
    const res = await fetch(`https://fakestoreapi.com/products`)
    const Data = await res.json()
    AllProduct(Data)
}
AllProductData()



function AllProduct(Data){
    let Card = document.createElement('div')
    Card.classList.add('card')
    Data.forEach(elem => {
        let products = `<div class="Product-Details">
        <img class="Product-Image" src="${elem.image}" alt="">
        <h3>${elem.title}</h3>
        <p>Price: ${elem.price}</p>
        <p>Rating: ${elem.rating.rate}</p>
        </div>
    `
    Card.innerHTML += products
    });
     Show.appendChild(Card)
}