let router = require ("express").Router();
let shop   = require ("../controller/shop_controller.js")

router.get("/",shop.render_shop_page)

module.exports = router;