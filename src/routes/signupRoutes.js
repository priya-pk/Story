const express = require('express');

const signupsRouter = express.Router();
function router(navs){
    signupsRouter.get('/',function(req,res){
        res.render("signup",{
            navs,
        title:'Library',
       
        });
    });
    
    return signupsRouter;
}
module.exports = router;