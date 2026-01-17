const mongoose=require("mongoose");
const Schema =mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
                    email:{
                                        type:String,
                                        required:true
                    }
                    //isme ham password and username nhi bhi define kare to fir bhi passportLocalMongoose automatically ye dono define kar deta h using hashing and adding salting
});
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",userSchema);