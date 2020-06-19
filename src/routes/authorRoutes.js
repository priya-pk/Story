const express = require('express');

const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            title:'A P J Abdul Kalam',
            author:'Wings of Fire',
            genre:'Autobiography',
            img:'kalam.png'
        },
        {
            title:'Paulo Coelho',
            author:'The Alchemist',
            genre:'Novel',
            img:'paulo.jpg'
        },
        {
            title:'Charles Dickens',
            author:'A Tale of Two Cities',
            genre:'Novel',
            img:'dickens.jpg'
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
        title:'Authors',
        authors
        });
    });

    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
        nav,
        title:'Author',author:authors[id]
        })
    })
    return authorsRouter;
}



module.exports = router;