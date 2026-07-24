import useStore from "../state/cart";

function Cart(){
  const { cart } = useStore();
  function getTotalPrice(){
    let total = 0;

    for (let i=0; i<cart.length; i++){
      total += cart[i].price * cart[i].quantity
    }
    return total
  }
  return(
    <div>
      <h1>Cart Page</h1>

      <div className="d-flex flex-column gap-2">
        {
          cart.map(product => 
            <div>
              <img src={"/images/" + product.image}></img>
              <p>Quantity: {product.quantity}</p>
              <p>$ {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>${product.quantity*product.price}</p>
            </div>
          )
        }
      </div>

      <h4>Total ${getTotalPrice()}</h4>
    </div>
  )
}

export default Cart