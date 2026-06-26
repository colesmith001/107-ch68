import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(){
    const [quantity, setQty] = useState(1); //
        // variable   fuction        state   initial value 
    // const quantity = 1
        function handleDecrease(){
            let nextVal = quantity - 1;
            if (nextVal > 0){
                setQty(nextVal);
            }
    }
    function handleIncrease()
    { 
        let nextVal = quantity + 1;
        // quantity = quantity + 1;
        setQty(nextVal);
    }

    return(
        <div className="quantity-picker">
            <button className="btn-minus" onClick={handleDecrease}>-</button>
            <label className="label-qty">{quantity}</label>
            <button className="btn-plus" onClick={handleIncrease} >+</button>
        </div>
    );
}
export default QuantityPicker;