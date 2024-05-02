import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required!"],
        minLength:[3,"Name must contain atleast 3 characer"],
    },
    email:{
        type:String,
        required:[true,"Email Required!"],
        // validator:[validator.isEmail,"Please provide valid email!"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email!"
        },
    },
    subject:{
        type:String,
        required:[true,"Subject Required!"],
        minLength:[5,"Subject must contain atleast 5 characer"],
    },
    message:{
        type:String,
        required:[true,"Message Required!"],
        minLength:[10,"Message must contain atleast 10 characer"],
    },

});

export const Message = mongoose.model("Message",messageSchema);