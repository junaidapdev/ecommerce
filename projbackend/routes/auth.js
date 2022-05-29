var express = require("express");
const { check } = require("express-validator");
var router = express.Router();

const { signout, signup, signin, isSignedIn } = require('../controllers/auth')

router.post("/signup",[
    check('name', 'name must be atleast 3 characters').isLength({min: 3}),
    check('email', 'email is required').isEmail(),
    check('password', 'password must be 3 char').isLength({min: 3}),
], signup)


router.post("/signin",[
    check('email', 'email is required').isEmail(),
    check('password', 'password field is requires').isLength({min: 1}),
], signin)




router.get("/signout", signout)

router.get("/testroute", isSignedIn ,(req, res) => {
    res.send("A Protectes Route")
}
)


module.exports = router;