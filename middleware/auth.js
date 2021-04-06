const jwt = require('jsonwebtoken')

module.exports = (req, res, next) =>{
    try{
        const token = req.headers.authorization.split( )[1];
        const decodedToken = jwt.verify(token, ALBERTBYRONETESTING);
        const userId = decodedToken.userId;

        //check if the userId doeas not match with the one on passed
        if(req.body.userId && req.body.userId !== userId){
            throw ('Invalid User Id')
        }else{
            //move it to the next middleware
            next()
        }

    }catch{
        res.status(401).json({
            error: new Error("Invalid request")
        })
    }
}