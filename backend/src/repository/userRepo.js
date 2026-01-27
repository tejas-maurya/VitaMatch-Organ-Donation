const { useDeferredValue } = require("react");
const { JWT_SECRET } = require("../config/serverConfig");
const User = require("../models/User");
const bcrypt = require('bcrypt');

class userRepository {

    async createUser (data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw new Error('Error in user repository');
        }
    }
    async findUser(data){
        try {
            const user = await User.find({email:data.email});
           return user;
        } catch (error) {
            console.log(error);
            throw new Error('Error while logging in');
        }
    }
}

module.exports = userRepository;