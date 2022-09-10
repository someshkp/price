const mongoose = require("mongoose");

module.exports = () => {
    const connection = {
        useNewUrlParser: true,
        useUnifiedTopology : true,
    };
    try{
      mongoose.connect(process.env.DB, connection);
      console.log("Connected to Database");
    }catch(error){
      console.log(error);
      console.log("Connection to database failed!")
    }
}