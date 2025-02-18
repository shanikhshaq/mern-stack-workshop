const express =require('express')
const app=express()
app.get('/products',(req,res)=>
res.send('<h1>The following are the products available</h1>')
)
app.post('/products',(req,res)=>
res.send('<h1>The product is saved succesfully/h1>')
)
app.put('/products',(req,res)=>
res.send('<h1>The products is updated succesfully</h1>')
)
app.delete('/products',(req,res)=>
res.send('<h1>The product is deleted succesfully</h1>')
)




app.listen(3000,()=>
console.log('express server is running on port 3000')
)
