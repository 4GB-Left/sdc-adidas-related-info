## CRUD Specification for Adidas Related Info Microservice
### For the "Inventory" collection
The CRUD operation will be consist of a "get" to retrieve the inventory by availability of size by product_id, a "post" to store the product size in a collection, a "put" to modify the product size information and a "delete" to delete the product inventory information from the collection

### inventory: CRUD/End-point
#### ```GET    : /api/v1/:product_id/inventory```
#### ```POST   : /api/v1/:product_id/inventory```
#### ```PUT    : /api/v1/:product_id/inventory```
#### ```DELETE : /api/v1/:product_id/inventory```

### For the "Products" collection
The CRUD operation will be consist of a "get" to retrieve the product by product_id, a "post" to store the product in a collection, a "put" to modify the product information and a "delete" to delete the product from the collection

### product: CRUD/End-point
#### ```GET    : /api/v1/:product_id/product```
#### ```POST   : /api/v1/product```
#### ```PUT    : /api/v1/:product_id/product```
#### ```DELETE : /api/v1/:product_id/product```

### For the "Shirt" Collection
The CRUD operation will be consist of a "get" to retrieve the shirt by id, a "post" to store the shirt information in a collection, a "put" to modify the shirt information and a "delete" to delete the shirt information from the collection

### Related Shirt: CRUD/End-point
#### ```GET    : /api/v1/:id/shirts```
#### ```POST   : /api/v1/:id/shirts```
#### ```PUT    : /api/v1/:id/shirts```
#### ```DELETE : /api/v1/:id/shirts```

### For the "Pants" Collection
The CRUD operation will be consist of a "get" to retrieve the pants by id, a "post" to store the pants information in a collection, a "put" to modify the pants information and a "delete" to delete the pants information from the collection

### Related Pants: CRUD/End-point
#### ```GET    : /api/v1/:id/pants```
#### ```POST   : /api/v1/:id/pants```
#### ```PUT    : /api/v1/:id/pants```
#### ```DELETE : /api/v1/:id/pants```

### For the "Like" collection
This collection will only have one CRUD operation,  a "post" that is invoke when a user click on the heart emoji

### like: CRUD/End-point
#### ```POST   : /api/v1/:product_id/like```