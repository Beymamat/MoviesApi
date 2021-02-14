const express = require('express');
const router=express.Router();

/* get directors page */

const Directors=require('../models/directors')
const Movies = require('../models/movies')


//| /api/directors | `GET` | Empty | List all directors. |
router.get('/',(req,res)=>{
    Directors.find({}).then(directors=>{
        res.json(directors);
    }).catch(err=>console.log(err))
})

//| /api/directors | `POST` | { name: 'foo', surname:'bar', bio:'lorem ipsum' } | Create a new director. |
router.post('/', (req,res)=>{
    const {name, surname, bio}=req.body
    const directors=new Directors({
        name: name,
        surname: surname,
        bio: bio,
    })
    directors.save()
    .then(data=>{
        console.log(req.json(data));
    }).catch(err=>{
        console.log(err);
    })
    res.require('/',()=>{
        console.log("Directors");
    })
})

//| /api/directors/:director_id | `GET` | Empty | Get a director. |
router.get('/:director_id', (req,res)=>{
    Directors.findById(req.params.director_id).then(director=>{
        res.json(director);
    }).catch(err=> console.log(err))
})


//| /api/directors/:director_id | `PUT` | {'name':'foo', 'surname':'bar', 'bio': 'lorem'} | Update a director with new info. |
router.put('/:director_id', (req,res, next)=>{
    Directors.findByIdAndUpdate(req.params.director_id,req.body)
    .then(director=>{
        res.json(director);
    }).catch(err=> console.log(err))
})


//| /api/directors/:director_id | `DELETE` | Empty | Delete a director. |
router.delete('/:director_id',(req,res)=>{
    Directors.findByIdAndRemove(req.params.director_id)
    .then(director=>{
        res.json(director)
    }).catch(err=> console.log(err))
})

//| /api/directors/:director_id/best10movie | `GET` | Empty | The director's top 10 films. |
router.get('/:director_id/best10movie',(req,res)=>{
    Movies.find({director: req.params.director_id}).sort({}).limit(10)
    .then(director=>{
        res.json(director)
    }).catch(err=>console.log(err))
})



module.exports=router;