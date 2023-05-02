let router = require ("express").Router();
let check_out  = require ("../controller/checkOut_controller.js")
router.get("/",check_out.render_check_out_page)
router.get("/Order",check_out.render_order_page)
router.post("/Order",check_out.render_order_page_post)

module.exports = router;