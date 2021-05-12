import React, {useState} from 'react';
import '../../App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

export default function Products() {
  const [cart,setCart]=useState([]);
  const [page,setPage]=useState('PAGE_PRODUCTS');
  const [products]=useState([
      {
        name: 'Paneer Butter Masala',
        cost: '$2.99',
        image: 'images/Paneer-butter-masala.jpg'
      },
      {
      name: 'Paneer Tikka',
      cost: '$2.05',
      image: 'images/paneer-tikka.jpg'
    },
    {
      name: 'Butter Naan',
      cost: '$1.5',
      image: 'images/naan.jpg'
    },
    {
      name: 'Gulab Jamun',
      cost: '$25.7',
      image: 'images/gulabjamun.jpg'
    }

  ])

  const addToCart =(product)=>{
    // console.log('we are in addToCart');
    setCart([...cart,{...product}])
  }

  const removeFromCart = (productToRemove) =>{
    setCart(cart.filter(product => product !== productToRemove))
  }

  const renderProducts = ()=>(
    <>
      <h1>Dishesh</h1>
      <div className="products">
      {products.map((product,idx)=>(
        <div className="product" key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt="{product.name}"/>
        <button onClick={()=> addToCart(product)}>Add to Cart
        </button>
      </div>
      ))}
      </div>
    </>
  );

  const navigateTo = (nextPage) =>{
    setPage(nextPage);
  }

  const renderCart= ()=>(
    <>
      <h1>Cart</h1>
      <div className="products">
      {cart.map((product,idx)=>(
        <div className="product" key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt="{product.name}"/>
        <button onClick={()=> removeFromCart(product)}>Remove
        </button>
      </div>
      ))}
      </div>
    </>
  );



  return(
    <>
    <header>
      <button onClick={()=> navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
    </header>
    <header>
      <button onClick={()=> navigateTo(PAGE_PRODUCTS)}>View Products  </button>
    </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </>
  );
}
