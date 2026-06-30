const catalog = [
    {
        "title":"Orange",
        "desc": "These oranges are transported from our local farms in fresno the freshest you will find in California",
        "category": "fruit",
        "price": "3.50 $ a /lb",
        "image":"orange.png",
        "_id":"1"
    },
    {
        "title":"Chocolate",
        "desc": "This is Local peruvian choclate made to reduce heart rate and heart disease risk",
        "category": "grocery",
        "price": "3.50 $ a /lb",
        "image": "chocolatte.png",
        "_id":"2"
    },
    {
        "title":"The Farmers Hoodie",
        "desc": "This hoodie is made from 100% silk imported straight from Italy",
        "category": "merch",
        "price": "85.00 $",
        "image":"hoodie.png",
        "_id":"3"
    },
];

class DataService{
    getProducts()
    {
        return catalog;
    }
}

export default DataService;