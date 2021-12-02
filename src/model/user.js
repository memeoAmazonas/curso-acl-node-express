const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, "name is mandatory"]
    },
    lastname: {
        type: String,
        required: [true, "lastname is mandatory"]
    },
    email: {
        type: String,
        required: [true, "email is mandatory"],
        unique: true,
    },
});

/*UserSchema.methods.toJSON = function () {
    const {__v, password, _id, ...user} = this.toObject();
    user.uid = _id;
    return user;
}*/
module.exports = model('User', UserSchema);
