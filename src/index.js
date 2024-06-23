import express from "express";
// import pdRouter from './routes/product.routes.js'

const app = express();

app.use(express.json());
app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})