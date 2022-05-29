const User = require('../models/user')

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User not found in DB"
            })
        }
    req.profile = user;
    next( )
})
}

exports.getUser = (req, res) => {
    // TODO: Comeback here for password
    
    return res.json(req.profile)
}