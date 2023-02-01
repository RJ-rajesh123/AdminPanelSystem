const mongoose=require("mongoose");
const { Schema } = mongoose;

const registerSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  email: String,
  address:  String,
  mobile: Number,
  password: {type: String},
  conpassword :String,
  date: { type: Date, default: Date.now }
});
const Register = mongoose.model('Register', registerSchema);
module.exports=Register;