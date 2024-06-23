import pool from "../db.config.js";


export const getallproducts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.json({success: true, data: result.rows});
        } catch (error) {
            console.error(error.message);
   res.status(500).json({ message: "Server error" });
   }
};



