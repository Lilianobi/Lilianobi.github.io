/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\const itemsCat =[
    {
    img:,
    id: 1234,
    title: Shoe ,
    description: 'a shoe worn' ,
    price:,
    },


 {
    img:,
    id: 1234,
    title: Shoe ,
    description: 'a shoe worn' ,
    price:,
    },

     {
    img:,
    id: 1234,
    title: Shoe ,
    description: 'a shoe worn' ,
    price:,
    },

     {
    img:,
    id: 1234,
    title: Shoe ,
    description: 'a shoe worn' ,
    price:,
    },

     {
    img:,
    id: 1234,
    title: Shoe ,
    description: 'a shoe worn' ,
    price:,
    },

]*/
const store = document.querySelector(".store");

/*itemsCat.map(
    (itemsCat, index)=> 
    (items.innerHTML += `<div>
         <img src=$(itemsCat.img) alt="shop"/>
        <h3 class="identify"> ID: $(itemsCat.id)</h3>
        <h1 class="title"> Title:$(itemsCat.title)</h1>
        <p id="description">$(itemsCat.description)</p>
        <p id="price">$(itemsCat.price)</p>
        </div>`)

)*/

const url = 'https://fakestoreapi.com/products/';

fetch(url)
.then(res=>res.json())
.then(json=>console.log(json))

const FetchStore = async () => {
    const response = await fetch(url);
    const data = await response.json();
    data.map(
        (products, index) =>
        (store.innerHTML +=`<div>
         <img class="images" src="${products.image}" alt="shop"/>
        <h3 class="identify"> ID: ${products.id}</h3>
        <h1 class="title"> Title:${products.title}</h1>
        <p id="description">${products.description}</p>
        <p id="price">${products.price}</p>
        </div>`)
    );
};
FetchStore();
