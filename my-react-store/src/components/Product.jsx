import { useState } from "react";
import useStore from "../state/cart";
import QuantityPicker from "./QuantityPicker";
import "./Product.css";

function Product(props){
    const [quantity, setQuantity] = useState(1);
    const {addProductToCart} = useStore();
    function handleQuantityChange(qty){
        console.log(qty);
        setQuantity(qty);

    }
    function getTotal(){
        let total = props.data.price.toFixed(2)*quantity;
        return total.toFixed(2);
    }

    function onAdd(){
        let fixedProduct = {...props.data}
        fixedProduct.quantity = quantity
        addProductToCart(fixedProduct)
        console.log(fixedProduct)
    }
    return(
        <div className="product">
            <img src = {"/images/"+ props.data.image} alt="product"></img>
            <h5>{props.data.title}</h5>
            <p>{props.data.desc}</p>
            <div className="prices">
                <label>{props.data.price.toFixed(2)} per unit</label>
                <br></br>
                
                <label class = "total">{getTotal()}</label>
            </div>
            <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
            <button onClick={onAdd} className= "add-to-cart-button my-2">Add to cart</button>
        </div>
    );
}
export default Product;