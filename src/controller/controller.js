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

