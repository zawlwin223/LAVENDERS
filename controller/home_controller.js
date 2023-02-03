let render_home_page = async (req,res,next)=>{
    res.render("../views/index.ejs")
}

module.exports={render_home_page}