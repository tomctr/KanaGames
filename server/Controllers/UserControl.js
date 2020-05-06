const UserModel = require('../Models/UserModel');

module.exports = {
    create: (req, res) => {
        let user = new UserModel({
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password
        });
        user.save()
        .then(result => {
            res.json({success: true, result: result});
        })
        .catch(err => {
            res.json({success: false, result: err});
        });
    }
}