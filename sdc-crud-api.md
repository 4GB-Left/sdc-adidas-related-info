# Server API

## Products Collection:
The CRUD operation will be consist of a "get" to retrieve the product by product_id, a "post" to store the product in a collection, a "put" to modify the product information and a "delete" to delete the product from the collection

### products: CRUD/End-point
#### ```GET    : /api/v1/products/:product_id```
#### ```POST   : /api/v1/products```
#### ```PUT    : /api/v1/products/:product_id```
#### ```DELETE : /api/v1/products/:product_id```

### Get product info
  * GET `/api/v1/products/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "price": "Number",
      "sale_price": "Number",
      "picture": "String",
      "description": "String",
      "category": "String"
    }
```

### Add product info
  * POST `/api/v1/products/`

**Success Status Code:** `201`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "name": "String",
      "price": "Number",
      "sale_price": "Number",
      "picture": "String",
      "description": "String",
      "category": "String"
    }
```

### Update product info
  * PUT `/api/v1/products/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "name": "String",
      "price": "Number",
      "sale_price": "Number",
      "picture": "String",
      "description": "String",
      "category": "String"
    }
```

### Delete product
  * DELETE `/api/v1/products/:product_id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`
