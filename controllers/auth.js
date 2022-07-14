exports.getLogin=(req,res,next)=>{
    res.render('auth/login',{
        path:'/login',
        pageTitle:'Login'
    })
}

exports.postLogin=(req,res,next)=>{
    res.redirect('/')
}

exports.getRegister=(req,res,next)=>{
    res.render('auth/register',{
        path:'/register',
        pageTitle:'Register'
    })
}
exports.postRegister=(req,res,next)=>{
    res.redirect('/login')
}