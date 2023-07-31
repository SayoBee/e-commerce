
function submitMe(){
 let search = document.getElementById('search').value
  fetch(`https://dummyjson.com/products/search?q=`+search)
  .then(res => res.json())
  .then(data=>{
console.log(data.products)
data.products.forEach(prod => {
  let text = 
  `
  <div class="product">
  <img src="${prod.images[1]}" alt="">
  <p>Title:${prod.title}</p>
  <p>Prices:${prod.price}</p>
  
      </div>
  `
  document.getElementById('product-container').innerHTML += text
});

  })
}






































// const form = document.forms['form'];


// const container = document.getElementById('product-container');

// form.addEventListener('submit', async function(event) {
//   event.preventDefault();
//   const input = form['input'].value;

//   try {
//     const products = await fetchData(input);
//     displayProducts(products);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// });

// async function fetchData(category) {
//   const url = `https://fakestoreapi.com/products/category/${category}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return await response.json();
//   } catch (error) {
//     throw new Error('Failed to fetch data from the API');
//   }
// }

// function displayProducts(products) {
//   container.innerHTML = '';

//   products.forEach(product => {
//     const { image, title, price } = product;
//     const productContainer = createProductContainer();
//     const imageElement = createImageElement(image);
//     const titleElement = createTitleElement(title);
//     const priceElement = createPriceElement(price);

//     productContainer.append(imageElement, titleElement, priceElement);
//     container.appendChild(productContainer);
//   });
// }

// function createProductContainer() {
//   const productContainer = document.createElement('div');
//   productContainer.classList.add('product');
//   return productContainer;
// }

// function createImageElement(image) {
//   const imageElement = document.createElement('img');
//   imageElement.src = image;
//   return imageElement;
// }

// function createTitleElement(title) {
//   const titleElement = document.createElement('h3');
//   titleElement.textContent = title;
//   return titleElement;
// }

// function createPriceElement(price) {
//   const priceElement = document.createElement('p');
//   priceElement.textContent = `$${price}`;
//   return priceElement;
// }
