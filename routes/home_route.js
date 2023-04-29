let router = require ("express").Router();
let home   = require ("../controller/home_controller.js")
router.get("/",home.render_home_page)
router.get("/home",home.render_home_page)

module.exports = router;