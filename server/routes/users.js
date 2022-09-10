const router = require("express").Router();
const { User, validate } = require("../models/user.js");
const bcrypt = require("bcrypt");
const Otp = require("../models/otp");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(409).send({ message: "User already exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

router.post("/emailsend",async(req,res) => {
  let data = await User.findOne({email : req.body.email});
  console.log(data);
  const responseType = {};
  if(data){
    let otpcode = Math.floor((Math.random()*10000)+1);
    let otpData = new Otp({
      email: req.body.email,
      code: otpcode,
      expireIn:new Date().getTime() + 300*1000
    })
    let otpReasponse = await otpData.save();
    responseType.statusText = "Success";
    mailer(email,otpcode);
    responseType.message = "Please check your email id";
  }else{
    responseType.statusText = "error";
    responseType.message = "Email not exist";
  }
  res.status(201).json(responseType);
})

router.post("/changepassowrd",async(req,res) => {
  let data = await Otp.find({email: req.body.email, code:req.body.otpcode});
  let response={};
  if(data){
    let currentTime = new Date().getTime();
    let diff = data.expireIn - currentTime;
    if(diff < 0){
      response.message = "Token Expire"
      response.statusText = "error"
    }else{
      let user = await Users.findOne({email: req.body.email})
      user.password = req.body.password;
      user.save();
      response.message = "Password changed Successfully"
      response.statusText ='Success';
    }
  }else{
    response.message = "Invalid otp"
    response.statusText = 'error'
  }
  res.status(201).json(response);
})

const mailer = (email, otp) =>{
  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'someshpatnaik037@gmail.com',
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: {email},
  subject: {otp},
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports = router;
