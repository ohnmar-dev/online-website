exports.getIndex=(req,res,next)=>{
    res.render('shop/index',{
        pageTitle:'Shop',
        path:'/'
    })
}

exports.getAbout=(req,res,next)=>{
    res.render('shop/about',{
        pageTitle:'About',
        path:'/about'
    })
}

exports.getProduct=(req,res,next)=>{
    res.render('shop/product',{
        pageTitle:'Products',
        path:'/product'
    })
}