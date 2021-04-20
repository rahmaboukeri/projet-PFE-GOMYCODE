const express = require("express");
const router = express.Router();
const { Signup, SignIn ,test, getAllUser, update, getOneUser } = require("../controllers/user");
const isAuth = require("../middlewares/auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/user");

router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});
router.get("/test",test)
router.get('/',getAllUser)
router.put("/update/:id", update)
router.get('/:id',getOneUser)



module.exports = router;
