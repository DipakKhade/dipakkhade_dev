import mongoose from "mongoose";

const connecttoMongoDB= async()=>{
    try {
       await mongoose.connect(process.env.MONOGODB_URL)
        console.log('connect to mongo sucessfully')
    } catch (error) {
        console.log(error)
    }

}


export default connecttoMongoDB ;