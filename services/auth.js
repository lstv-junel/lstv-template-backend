

const {privateKey} = require('../config/config.dev.json');
const jwt = require('jsonwebtoken');

const signToken = (body) => {

    const {usrname, usrcde, usrpwd} = body;

    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            usrname: usrname,
            usrcde: usrcde,
            usrpwd: usrpwd
        }
    }, privateKey, {algorithm: 'HS256'}); 
}


const verifyToken = (token) => {

    try {
        return jwt.verify(token, privateKey);
    } catch (error) {
        throw error;
    }
}


module.exports = {signToken, verifyToken}

