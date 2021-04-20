const User = require("../models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");


 exports.test = async (req,res) =>{
               res.send("hello rahma")
                  }


exports.Signup = async (req, res) => {
  try {
    //   req.body
    const { name, lastName, email, phone, password } = req.body;

    // check if the email is not found in the database
    const FoundUser = await User.findOne({ email });

    if (FoundUser) {
      res.status(400).send({
        errors: [{ msg: "user already exist email should be unique" }],
      });
      return;
    }
    const newUser = new User({ name, lastName, email, phone, password });

    // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newUser.password = hashedpassword;

    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    //then we save it in the database
    await newUser.save();
    res.status(200).send({ msg: "user saved succ", user: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the user" }] });
  }
};

exports.SignIn = async (req, res) => {
  try {
    // get the req.body
    const { email, password } = req.body;
    // seach if the user exist
    const searchUser = await User.findOne({ email });

    // send an error if he didnt exist
    if (!searchUser) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchUser.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", user: searchUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};



//Get All Users
exports.getAllUser = async (req, res)=>{
  try {
    const result = await User.find()
    res.status(200).send({msg : 'Success To Get All Users...', users : result})
  } catch (error) {
    res.status(400).send({msg : "Can Not  all Users", error})
  }
}

//update
exports.update = async( req, res )=>{
    try {
        const result = await User.updateOne({_id : req.params.id}, {$set : req.body})
        if(!result.nModified){
            res.status(400).send({msg : "User Already Updated !!!", error})
            return;
        }
        res.status(200).send({msg : 'User is Updated ...', result})
    } catch (error) {
        res.status(400).send({msg : "Can Not Updated ", error})
    }
}


exports.getOneUser = async (req,res) => {
                        try {
                                const userToFind = await User.findOne({ _id: req.params.id })
                                res.status(200).send({ msg: 'this is one user ... ', userToFind })
                        } catch (error) {
                                res.status(400).send({msg: 'can not get this id ... ',error })
                        }
                }