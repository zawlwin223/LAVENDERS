let router = require ("express").Router();
let check_out  = require ("../controller/checkOut_controller.js")
router.get("/",check_out.render_check_out_page)

module.exports = router;