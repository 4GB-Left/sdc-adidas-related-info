# Server API

## Shirt Collection:
The CRUD operation will be consist of a "get" to retrieve the shirt by id, a "post" to store the shirt information in a collection, a "put" to modify the shirt information and a "delete" to delete the shirt information from the collection

### Shirt: CRUD/End-point
#### ```GET    : /api/v1/shirts/:shirt_id```
#### ```POST   : /api/v1/shirts```
#### ```PUT    : /api/v1/shirts/:shirt_id```
#### ```DELETE : /api/v1/shirts/:shirt_id```

### Get shirt info
  * GET `/api/v1/shirts/:id`

**Path Parameters:**
  * `id` shirt id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "price": "Number",
      "inventory_id": "Number"
    }
```

## Pants Collection:
The CRUD operation will be consist of a "get" to retrieve the pants by id, a "post" to store the pants information in a collection, a "put" to modify the pants information and a "delete" to delete the pants information from the collection

### Pants: CRUD/End-point
#### ```GET    : /api/v1/pants/:pant_id```
#### ```POST   : /api/v1/pants/```
#### ```PUT    : /api/v1/pants/:pant_id```
#### ```DELETE : /api/v1/pants/:pant_id```

### Add pant
  * POST `/api/v1/pants/`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
      "price": "Number",
      "inventory_id": "Number"
    }
```

## Products Collection:
The CRUD operation will be consist of a "get" to retrieve the product by product_id, a "post" to store the product in a collection, a "put" to modify the product information and a "delete" to delete the product from the collection

### products: CRUD/End-point
#### ```GET    : /api/v1/products/:product_id```
#### ```POST   : /api/v1/products```
#### ```PUT    : /api/v1/products/:product_id```
#### ```DELETE : /api/v1/products/:product_id```

### Add product info
  * POST `/api/v1/product/`

**Path Parameters:**
  * `id` product id

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

## Likes Collection:
This collection will only have one CRUD operation,  a "post" that is invoke when a user click on the heart emoji

### likes: CRUD/End-point
#### ```POST   : /api/v1/likes/:product_id```

### Add like info
  * POST `/api/v1/like/:product_id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `201`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "product_id": "Number",
      "like": "Boolean"
    }
```
## Socks Collection:
The CRUD operation will be consist of a "get" to retrieve the socks by id, a "post" to store the socks information in a collection, a "put" to modify the socks information and a "delete" to delete the socks information from the collection

### Socks: CRUD/End-point
#### ```GET    : /api/v1/socks/:sock_id```
#### ```POST   : /api/v1/socks```
#### ```PUT    : /api/v1/socks/:sock_id```
#### ```DELETE : /api/v1/socks/:sock_id```

### Update sock info
  * PUT `/api/v1/socks/:id`

**Path Parameters:**
  * `id` sock id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "name": "String",
      "price": "Number",
      "inventory_id": "Number"
    }
```

## Inventory Collection:
The CRUD operation will be consist of a "get" to retrieve the inventory by id, a "post" to store the inventory information in a collection, a "put" to modify the inventory information and a "delete" to delete the inventory information from the collection

### inventory: CRUD/End-point
#### ```GET    : /api/v1/inventory/:product_id```
#### ```POST   : /api/v1/inventory/```
#### ```PUT    : /api/v1/inventory/:product_id```
#### ```DELETE : /api/v1/inventory/:product_id```

### Delete sock
  * DELETE `/api/v1/inventory/:product_id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`
