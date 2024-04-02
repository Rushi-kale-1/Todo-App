const globalSeckertkey = "UltraSecretDontDisclose_69"
const jwt = require('jsonwebtoken')
const {User} = require("./Db/mongoDb");

function usermid (req,res,next){
    const token = req.headers.authorization

    const decodedToken = jwt.verify(token,globalSeckertkey)

    if (decodedToken.username){
        User.findOne({
            username:decodedToken.username
        })
            .then((value)=>{
                req.username = decodedToken.username;
                next()
            })
    } else{
        res.status(403).json("unauthenticated")
    }
}
module.exports = {
    usermid,
}