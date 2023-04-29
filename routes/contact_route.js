let router = require ("express").Router();
let contact  = require ("../controller/contact_controller.js")
router.get("/",contact.render_contact_page)

module.exports = router;