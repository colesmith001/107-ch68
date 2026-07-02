import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import {useState} from "react";

function Product(props){
    const [quantity, setQuantity] = useState(1);
    function handleQuantityChange(qty){
        console.log(qty);
        setQuantity(qty);

    }
    function getTotal(){
        let total = props.data.price.toFixed(2)*quantity;
        return total.toFixed(2);
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
        </div>
    );
}
export default Product;