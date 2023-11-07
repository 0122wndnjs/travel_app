const router = require("express").Router();
const countryController = require("../controllers/countryController");

router.post("/countries", countryController.addCountry);
// router.get("/countries", countryController.getCountries)

module.exports = router;
