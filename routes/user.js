const { getMe, login } = require("../services/users");
const { authMiddleware } = require("./auth");

const router = require("express").Router()


const initUsers = () => {

    console.log("DUMAAN");

    router.get("/me", authMiddleware, async(req,res) =>{

        console.log("HEY I JUST MET YOU");

        try {
            const myself = await getMe(req.parsedToken.data.usrcde);
            res.status(200).json({status: 'Your profile', code: 200, payload: myself });
            
        } catch (error) {
            res.status(200).json({status: 'Your profile', code: 200, payload: {msg: error} });
        }   
    });

    router.post("/login", async(req,res) => {
        const {err, data} = await login(req.body);

        if(err){
            return res.status(err.code).json(err)
        }

        res.status(data.code).json(data);
    });

    return router;

}


module.exports= {
    initUsers
}