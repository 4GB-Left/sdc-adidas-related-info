## CRUD Specification for Adidas Related Info Microservice
### For the "product" collection
The CRUD operation will be consist of a "get" to retrieve the product by product_id, a "post" to store the product in a collection, a "put" to modify the product information and a "delete" to delete the product from the collection

### product: CRUD/End-point
#### ```GET    : /api/v1/:product_id/product```
#### ```POST   : /api/v1/product```
#### ```PUT    : /api/v1/:product_id/product```
#### ```DELETE : /api/v1/:product_id/product```


### For the "inventory" collection
The CRUD operation will be consist of a "get" to retrieve the inventory by availability of size by product_id, a "post" to store the product size in a collection, a "put" to modify the product size information and a "delete" to delete the product inventory information from the collection

### inventory: CRUD/End-point
#### ```GET    : /api/v1/:product_id/inventory```
#### ```POST   : /api/v1/:product_id/inventory```
#### ```PUT    : /api/v1/:product_id/inventory```
#### ```DELETE : /api/v1/:product_id/inventory```

### For the "Related Product" Collection
The CRUD operation will be consist of a "get" to retrieve the related product by category, a "post" to store the related product in a collection, a "put" to modify the related product information and a "delete" to delete the related product information from the collection

### Related Product: CRUD/End-point
#### ```GET    : /api/v1/:product_id/inventory```
#### ```POST   : /api/v1/:product_id/inventory```
#### ```PUT    : /api/v1/:product_id/inventory```
#### ```DELETE : /api/v1/:product_id/inventory```

### For the "like" collection
This collection will only have one CRUD operation,  a "post" that is invoke when a user click on the heart emoji

### like: CRUD/End-point
#### ```POST   : /api/v1/:product_id/like```