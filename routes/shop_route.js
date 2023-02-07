let router = require ("express").Router();
let shop   = require ("../controller/shop_controller.js")

router.get("/",shop.render_shop_page);
router.post("/",shop.add_product)

router.route("/:id").get(shop.render_product_detail_page)

module.exports = router;