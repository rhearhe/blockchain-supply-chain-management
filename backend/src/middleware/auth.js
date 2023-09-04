const jwt = require('jsonwebtoken')
var crypto = require('crypto');
const User = require('../models/user')
const j = crypto.randomBytes(64).toString("hex")
//process.env.JWT_SECRET
const auth = async (req, res, next) => {

    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token,j)

        const user = await User.findById({_id: decoded._id,'tokens.token':token})
    
        if(!user){
            throw new Error()
        }

        req.token = token
        req.user = user
        next()

    } catch (e) {
        res.status(401).send({ 'error': 'Please authenticate' })
    }

}

module.exports = auth