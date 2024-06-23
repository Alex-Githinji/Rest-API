 # SMART-SHOP PRODUCT  
 This is a simple RESTful API for managing products using Node.js, Express, and PostgreSQL.

 # How to use it

 1 clone the repository   

   ```
   git clone https://github.com/abdulrahman-ahmed/Smart-Shop.git  
   ```  

2 install the dependancies using the npm install  

## usage  

After starting the server, you can use the following endpoints to interact with the API. 

### Get All Products
 - run (get/products)

### get a single product  
- run (get/products/:id)  

### create a product  
- run (post/products) with the following body
 ```
 {
	"productthumbnail" : "thumb346url",
	"producttitle" : "sahara",
    "productdescription" : "here we are",
	  "productcost" : "$159",
	"onoffer" : "No"
	
	
}  
```  
### update a product
- run (put/products/:id) with the following body
```  {
	"productthumbnail" : "thumb346url",
	"producttitle" : "sahara",
    "productdescription" : "here we are",
	  "productcost" : "$159",
	"onoffer" : "No"
	
	
}  
```  
### delete a product
- run (delete/products/:id)  

- id is the primary index of the table







