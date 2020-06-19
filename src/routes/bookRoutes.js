const express = require('express');

const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title:'Wings of Fire',
            author:'A P J Abdul Kalam',
            genre:'Autobiography',
            img:'wingsoffire.jpg'
        },
        {
            title:'The Alchemist',
            author:'Paulo Coelho',
            genre:'Novel',
            img:'alchemist.jpg'
        },
        {
            title:'A Tale of Two Cities',
            author:'Charles Dickens',
            genre:'Novel',
            img:'2 cities.jpg'
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
        title:'Books',
        books
        });
    });

    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
        nav,
        title:'Book',book:books[id]
        })
    })
    return booksRouter;
}



module.exports = router;