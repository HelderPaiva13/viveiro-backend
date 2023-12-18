const express = require('express');
const dotenv = require('dotenv').config();
const productsPool = require('./db/DBConfig');

const app = express();
app.use(express.json());




const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send("wellcome!");
});

app.get('/api/products', async (req, res) => {
  try {
    const allProducts = await productsPool.query(
      'SELECT * FROM products'
    );
    res.json(allProducts.rows);
  } catch (error) {
    res.status(500).send(error.message)
  }
});

app.post('/api/add', (req, res)=>{
  res.json({message: "cadastro rota"});
} )

app.listen( PORT, ()=>{
  console.log(`server running PORT: ${PORT}`);
})