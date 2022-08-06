const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-medium');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const asideOrders = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('.container-product-detail');

const productDetailCloseIcon = document.querySelector('.container-product-detail--close');

const arrowClose = document.querySelector('.arrowClose');

menuEmail.addEventListener('click', toggleMenuEmail);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
arrowClose.addEventListener('click', arrowCloseIcon);

function toggleMenuEmail(){
    //Estamos preguntando si el Shoping Car Orders esta abierto y de ser asi cerrarlo para visualiza solamente el de menu email
    const isAsideClose = asideOrders.classList.contains('inactive');

    if (!isAsideClose){
        asideOrders.classList.add('inactive');
    }

    //Estamos quitando y poniendo la class inactive para el menu email para visualizar
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    //Estamos preguntando si el Shoping Car Orders esta abierto y de ser asi cerrarlo para visualiza solamente el de menu mobile
    const isAsideClose = asideOrders.classList.contains('inactive');

    if (!isAsideClose){
        asideOrders.classList.add('inactive');
    }

    closeProductDetailAside()

    //Estamos quitando y poniendo la class inactive para el menu mobile para visualizar
    mobileMenu.classList.toggle('inactive');
}
function toggleCarAside(){
    //Estamos preguntando si el menu mobile esta abierto y de ser asi cerrarlo para visualiza solamente el de Shoping Car Orders
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isEmailMenuClose = desktopMenu.classList.contains('inactive');
    
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    if (!isEmailMenuClose){
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }

    //Estamos quitando y poniendo la class inactive para el Shoping Car Orders para visualizar
    asideOrders.classList.toggle('inactive');
}
function arrowCloseIcon(){
    asideOrders.classList.add('inactive');
}
function openProductDetailAside(){
    const isAsideClose = asideOrders.classList.contains('inactive');

    if (!isAsideClose){
        asideOrders.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Desktop',
  price: 2220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Camara',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Lampara de Aceite',
    price: 90,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  });

//El ciclo for funciona igual tanto dentro como fuera de la funcion pero lo colocamos dentro por tener mayor accesibilidad y escalabilidad
function renderProducts(arr) {
  for (product of arr) {
    //Maquetacion desde JS a HTML por cada una de las cards
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    //Evento para al dar click sobre la imgen del producto se despliegue una seccion de detalles (container-product-detail)
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './Logos/bt_add_to_cart.svg');

    //Aqui estamos insertando etiquetas dentro de etiquetas  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
