const express = require('express');

const adminRouter = express.Router();

function router(nav){
    adminRouter.get('/',function(req,res){
        res.render("addBook",{
            nav,
        title:'Add Books',
       
        });
    });
    adminRouter.post('/add',function(req,res){
        res.send('sended');
    })
    return adminRouter;
}
module.exports = router;
