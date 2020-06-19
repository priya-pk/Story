const express = require('express');

const addsRouter = express.Router();

function router(nav){
    addsRouter.get('/',function(req,res){
        res.render("add",{
            nav,
        title:'Add Books',
       
        });
    });

    

    return addsRouter;
}
module.exports = router;
