const { getMe, login } = require("../services/users");
const { authMiddleware } = require("./auth");
const {models} = require('../database');

const router = require("express").Router()


const initDepartments = () => {


    router.get("/", authMiddleware, async(req,res) =>{
    // router.get("/", authMiddleware, async(req,res) =>{

        console.log(req.parsedToken.data.usrcde);

        const departmentFind = await models.departmentfile.findAll({});

        // const departmentFind = await models.departmentfile.findAll({include: [
        //     {
        //         model: models.employeefile,
        //         attributes: ['empcode', 'fullname', 'usrtyp', 'deptcode']
                
        //     }
        // ]});

        res.status(200).json({status: 'Success', code: 200, payload: departmentFind});

    });

    return router;

}


module.exports= {
    initDepartments
}