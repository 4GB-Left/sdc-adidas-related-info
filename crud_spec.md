## CRUD Specification for Adidas Related Info Microservice
### For the "Inventory" collection
The CRUD operation will be consist of a "get" to retrieve the inventory by availability of size by product_id, a "post" to store the product size in a collection, a "put" to modify the product size information and a "delete" to delete the product inventory information from the collection

### inventory: CRUD/End-point
#### ```GET    : /api/v1/inventory/:product_id```
#### ```POST   : /api/v1/inventory/```
#### ```PUT    : /api/v1/inventory/:product_id```
#### ```DELETE : /api/v1/inventory/:product_id```

### For the "Products" collection
The CRUD operation will be consist of a "get" to retrieve the product by product_id, a "post" to store the product in a collection, a "put" to modify the product information and a "delete" to delete the product from the collection

### product: CRUD/End-point
#### ```GET    : /api/v1/product/:product_id```
#### ```POST   : /api/v1/product```
#### ```PUT    : /api/v1/product/:product_id```
#### ```DELETE : /api/v1/product/:product_id```

### For the "Shirts" Collection
The CRUD operation will be consist of a "get" to retrieve the shirt by id, a "post" to store the shirt information in a collection, a "put" to modify the shirt information and a "delete" to delete the shirt information from the collection

### Shirt: CRUD/End-point
#### ```GET    : /api/v1/shirts/:id```
#### ```POST   : /api/v1/shirts```
#### ```PUT    : /api/v1/shirts/:id```
#### ```DELETE : /api/v1/shirts/:id```

### For the "Pants" Collection
The CRUD operation will be consist of a "get" to retrieve the pants by id, a "post" to store the pants information in a collection, a "put" to modify the pants information and a "delete" to delete the pants information from the collection

### Pants: CRUD/End-point
#### ```GET    : /api/v1/pants/:id```
#### ```POST   : /api/v1/pants/```
#### ```PUT    : /api/v1/pants/:id```
#### ```DELETE : /api/v1/pants/:id```

### For the "Socks" Collection
The CRUD operation will be consist of a "get" to retrieve the socks by id, a "post" to store the socks information in a collection, a "put" to modify the socks information and a "delete" to delete the socks information from the collection

### Socks: CRUD/End-point
#### ```GET    : /api/v1/socks/:id```
#### ```POST   : /api/v1/socks/```
#### ```PUT    : /api/v1/socks/:id```
#### ```DELETE : /api/v1/socks/:id```

### For the "Likes" collection
This collection will only have one CRUD operation,  a "post" that is invoke when a user click on the heart emoji

### like: CRUD/End-point
#### ```POST   : /api/v1/like/:product_id```