import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'


const userSchema = mongoose.Schema({
    username:String,
    email: String,
    createpassword : String,
    confirmpassword : String,
    password: String,
    name : String,
    price: String,
    description: String,
    MediaUrl: String,
});


autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'user');

const user =  mongoose.model('userdetail',userSchema);
export default user;