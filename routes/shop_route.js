let router = require ("express").Router();
let shop   = require ("../controller/shop_controller.js")

router.get("/",shop.render_shop_page);
router.post("/",shop.add_product);
router.get("/price_high_to_low",shop.price_high_to_low)
router.get("/price_low_to_high",shop.price_low_to_high)
router.get("/category/:category",shop.by_category)
router.get("/brand/:brand",shop.by_brand)

router.route("/:id").get(shop.render_product_detail_page)

module.exports = router;