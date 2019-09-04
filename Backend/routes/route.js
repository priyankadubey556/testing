const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router();

const Post = require('../models/post')


router.get('/users', ((req,res)=>{
    console.log(Post)
    Post.find().then((documents) =>{
        console.log(documents)
        res.status(200).json({
          message:"Data fetched successfully",
          users: {data: documents}
        });
    })

}))


router.post('/users/add', ((req,res) => {
    console.log(req.body);
        const post = new Post({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })    
        post.save().then(document=> {
            if(document){
                console.log(post);
                res.status(200).json({
                 message:"Data fetched successfully",
                 users: post
                });
            }
        }).catch(err=> {
            res.status(500).json({
              Statuscode:"500",
              message:"Internal Server Error"+err
         });
       }) 
    
                                                                        
}))

module.exports = router

