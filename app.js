const http = require('http')
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.use(expressLayouts)
app.set('layout','./layouts/page.ejs')
app.set('view engine','ejs')
/*predefined value */
const products = [
     {
       name: "Mi Note 11 pro+",
       image: "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Mobiles/Xiaomi%20Mi/Redmi-Note-11-Pro/Redmi-Note-11-Pro-Phantom-White-back.jpg",
       details: "5g,128/8,snapdragon 695,120Hz super AMOLED Display",
       price: 19000
     },
     {
       name: "Realme 9 pro+",
       image: "https://www.jiomart.com/images/product/original/492849166/realme-9-pro-plus-5g-128-gb-6-gb-ram-sunrise-blue-smartphone-digital-o492849166-p591054099-6-202202222122.jpeg",
       details: "5g,128/8,mediaTek Dimensity 920,90Hz super AMOLED Display",
       price: 23000
     },
     {
       name: "Moto g71",
       image: "https://motorolain.vtexassets.com/arquivos/ids/157048-1200-1200?v=637835436811200000&width=1200&height=1200&aspect=true",
       details: "5g,128/8,snapdragon 695,120Hz AMOLED Display",
       price: 18000
     },
     {
       name: "Poco x4 pro ",
       image: "https://cdn.shopify.com/s/files/1/2551/9654/products/828GF-GLPC63_1024x1024.jpg?v=1662778180",
       details: "5g,128/8,snapdragon 695,120Hz super AMOLED Display",
       price: 16000
     }
     /* ending*/
   ]



app.get('/', (req,res)=>{
     res.render('home', { products })
})

http.createServer(app).listen(7000,()=>{
     console.log("running")
})