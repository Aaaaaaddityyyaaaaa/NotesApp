const express = require("express")
const router = express.Router()
router.use(require("./get"))
router.use(require("./post"))
router.use(require("./put"))
router.use(require("./delete"))
router.use(require("./getbyid"))

module.exports = router ;