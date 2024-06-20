const {models} = require("../database");
const { encryptSHA1 } = require("../utilities/encryption");
const { signToken } = require('./auth');


const getMe = async (empcode) => {
    const me = await models.users.findOne({where: {empcode: empcode}});
    console.log(me);

    return me;

}

const login = async (req) => {


    try {
        const findUser = await models.users.findOne({where : {
            usrcde: req.usrcde,
            usrpwd: encryptSHA1(req.usrpwd)
        }, raw: true});
        
        console.log(findUser);

        if(!findUser){
            return {err: {
                code: 401,
                status: "No user found"
            }, data: findUser}
        }

        const token = signToken(findUser);
        console.log(token);

 
        return {err: null, data: {
                code: 200,
                status: "Successfully logged in",
                payload: {
                    BearerToken: token
                }
            }
        }
    } catch (error) {
        console.log(error);
        return {err: {
            code: 500,
            status: error.message
        }, data: null};
    }
}

module.exports = {
    getMe,
    login
}