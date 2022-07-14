const express=require('express')
const shopController=require('../controllers/shop');
const router=express.Router();



router.get('/',shopController.getIndex)

router.get('/about',shopController.getAbout)

router.get('/product',shopController.getProduct)



module.exports=router
