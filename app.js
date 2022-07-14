const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const path=require('path')
const app=express();

const shopRouter=require('./routes/shop')
const authRouter=require('./routes/auth')

app.set('view engine','ejs')
app.set('views views')


app.use(shopRouter)
app.use(authRouter)
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))


app.listen(5000)