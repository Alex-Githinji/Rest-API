import pool from '../db.config.js';

export const getallproducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json({ success: true, data: result.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getproduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query(`SELECT * FROM products WHERE id = $1`, [id]
        );
        if (result.rowsCount === 0) {
            res.status(404).json({ message: 'Product not found' });
            } else {
                res.json({ success: true, data: result.rows[0] });
                }
                } catch (error) {
                    console.error(error.message);
                    res.status(500).json({ message: 'Server error' }); 
                    
}
}

export const createProduct= ( async (req, res) => {
    const { productThumbnail, productTitle, productDescription, productCost, onOffer } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO products (productthumbnail, producttitle, productdescription, productcost, onoffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [, productTitle, productDescription, productCost, onOffer]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export const updateProduct = (async (req, res) => {
    const id = req.params.id;
    const { productthumbnail, producttitle, productdescription, productcost, onoffer } = req
    try{
        let updateproducts;
        if (productthumbnail) {
          updateproduct = await pool.query(
            "update products SET productthumbnail=$1 where id=$2",
            [productthumbnail, product_id],
          );
        }
        if(producttitle){
          updateproducts = await pool.query("update products set producttitle=$1 where id=$2",
          
          [producttitle, product_id],
          );
        }
        if (productdescription){
          updateproducts = await pool.query("update products set productdescription=$1 where id =$2",
            [productdescription, product_id],
          );
        }
        if(productcost){
          updateproducts = await pool.query("update products set productcost=$1 where id =$2",
            [productcost, product_id],
          );
        }
        if(onoffer){
          updateproducts = await pool.query("update products set onoffer=$1 where id=$2",
            [onoffer,product_id],
          );
        }
        if (updateproducts.rowCount === 1){
          res.status(200).json({success:true, message:"product updated successfully"});
          console.log("successful update");

        }else{
          res.status(404).json({success:false, message:"invalid entry please try again"})
          console.log("errors");
        }
      }catch(err){
        res.status(500).json({success:false,message:err.message});
      }
    }

)


export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteproduct = await pool.query("DELETE FROM products WHERE id = $1", [id]);

        if (deleteproduct.rowCount === 1) {
            res.status(200).json({ success: true, message: "Product deleted successfully" });
            console.log("Successful delete");
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
            console.log("Product not found");
        }
    } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

