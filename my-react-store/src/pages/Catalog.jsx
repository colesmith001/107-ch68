import Product from "../components/Product";
import DataService from "../services/dataService";
import "./Catalog.css";
import { useEffect , useState } from "react";

function Catalog(){
    const [products, setProducts]= useState([]);
    // let products = []
    useEffect(( )=>{
        // load data here 
        let service = new DataService;
        let data = service.getProducts();
        setProducts(data);
    }, [] 
    // empty array means it only runs once 

    )
    return(
        <div className="catalog">
            <h1>Check out our products</h1>
            {products.map(prod => <Product key={prod._id} data={prod}/>)}
            {/* {for(x,y,z)
                temp[x]
            } */}
        </div>
    );
}
export default Catalog;