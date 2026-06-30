const catalog = [
    {
        "title":"Orange",
        "category": "fruit",
        "price": "3.50 $ a /lb",
        "image":"orange.png",
        "_id":"1"
    },
    {
        "title":"Chocolate",
        "category": "grocery",
        "price": "3.50 $ a /lb",
        "image": "chocolatte.png",
        "_id":"2"
    },
    {
        "title":"Hoodie",
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