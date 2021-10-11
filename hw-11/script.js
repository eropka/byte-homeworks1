const products = [
   {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
   },
   {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
   },
   {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
   },
];

// Вариант с innerHTML

// const creatCardProducts = (arr) => {
//    let cardProductsContainer = document.createElement('div');

//    for(let item of arr){
//    let cardProductsProperties = item.properties
//       .map((el) => `<li>${(el)}</li>`)
//       .join('');

//    let productsHTML = `
//    <div>
//       <h2>${item.name}</h2>
//       <h3>${item.brand}</h3>
//       <ul>
//          ${cardProductsProperties}
//       </ul>
//    </div>
//    `

//    cardProductsContainer.innerHTML += productsHTML;
//    }

//    return cardProductsContainer;
// }

// c append

const creatCardProducts = (arr) => {
   const cardProductsContainer = document.createElement('div');


   for(let item of arr){
      // let cardProductsContainerElem = document.createElement('div');
      let cardProductsName = document.createElement('h2');
      let cardProductsBrand = document.createElement('h3');   
      let cardProductsProperties = document.createElement('ul');

      cardProductsName.innerHTML = item.name;
      cardProductsBrand.innerText = item.brand;
      item.properties.forEach((elem) =>{
         const propertiesElem = document.createElement('li');
         propertiesElem.innerText = elem;

         cardProductsProperties.append(propertiesElem);
      })
      
      cardProductsContainer.append(cardProductsName, cardProductsBrand, cardProductsProperties);
   }

   return cardProductsContainer;
}


const getCardProducts = creatCardProducts(products);
document.body.append(getCardProducts);
console.dir(getCardProducts)