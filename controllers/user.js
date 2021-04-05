const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.signup = (req, res, next)=> {
    bcrypt.hash(req.body.password, 10).then(
        (hsh) =>{
            const user = new User({
                email: req.body.email,
                password: hash,
            });
            user.save().then(
                ()=>{
                    res.statu(201).json({
                        message : "User created"
                    })
                }
            );
        }
    ).catch((error) =>{
        res.status(400).json({
            error:error
        });
    });
}

exports.login = (req, res, next) =>{
    User.findOne({ email: req.body.email}).then(
        (user)=>{
            //check if the user exists in the database
            if(!user){
                return res.status(401).json({
                    //authentication fail
                    error: new Error("User does not exist")
                });
            }
            //oif the user exist we compare the passwords
            //compare the inputted passwword and the password in the database
            bcrypt.compare(res.body.password, user.password).then(
                (valid)=>{
                    if(!valid){
                        return res.status(401).json({
                            error: new Error("Wrong password")
                        })
                    }
                    //if the user exist retiurn the user
                    res.status(200).json({
                        userId: user._id,
                        token: "token",
                    })
                }
            ).catch(
                (error) =>{
                    res.status(500).json({
                        error: error
                    });
                });

        }).catch((error) =>{
            res.status(500).json({
                error: error
            });
        })

};