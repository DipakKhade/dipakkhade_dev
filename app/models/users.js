import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema= new Schema(
    {
        email:{
            type:String ,
            required :true
        },
        subject:{
            type:String ,
            required :true
        },
        message:{
            type:String ,
            required :false
        },
    },
    { timestamps: true }
);

const User = mongoose.models.User  ||  mongoose.model("User",userSchema)   //User is a collection name

export default User 