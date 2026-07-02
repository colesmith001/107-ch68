import Product from "../components/Product";
import DataService from "../services/dataService";
import "./Catalog.css";
import { useEffect , useState } from "react";

function Catalog(){
    const [products, setProducts]= useState([]);
    const [categories, setCategories]= useState([]);
    const [productsToDisplay, setProductsToDisplay] = useState([]);
    // let products = []
    useEffect(( )=>{
        // load data here 
        let service = new DataService;
        let data = service.getProducts();
        setProducts(data);
        setProductsToDisplay(data);
        loadCatalog();
    }, []      
    );
    
    function loadCatalog(){
    let categoriesFilter = ["fruit","grocery","merch"];
    setCategories(categoriesFilter); 
}

function filter(category){
    let list=[];
    // find the product that match the category
    // this is a for loop and at the end you have to move the result to products to display
    for (let i=0; i<products.length; i++){
        let prod = products[i];
        if (prod.category == category){
            list.push(prod);
        }
    }
    setProductsToDisplay(list);
}
function clearFilter(){
    setProductsToDisplay(products);
}

    
    return(
        <div className="catalog">
            <h1>Check out our products</h1>
            <button onClick={clearFilter}>All</button>
            {categories.map(cat => <button key={cat} onClick={() => filter(cat)}>{cat}</button> )}
            {productsToDisplay.map(prod => <Product key={prod._id} data={prod}/>)}
            {/* {for(x,y,z)
                temp[x]
            } */}
        </div>
    );
}

export default Catalog;