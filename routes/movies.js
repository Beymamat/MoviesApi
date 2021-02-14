const express = require('express');
const router = express.Router();

/* Get movies page */

const Movies = require('../models/movies')

//  /api/movies | `GET` | Empty | List all movies. |
router.get('/', (req, res, next) => {
    // res.render('movies', { title: 'Movies' });
    // res.send('Movies')
    Movies.find({}).then(movie => {
        res.json(movie);
    }).catch(err => console.log(err))

    // require('/')
})


//  /api/movies | `POST` | {'title':'foo', 'category':'bar', 'country':'Uzbekistan', year:1990,  director:"id", imdb_score: 9.7 } | Create a new movie. |
router.post('/', (req, res) => {
    const { title, category, country, year, director, imdb_score } = req.body
    const movie = new Movies({
        title: title,
        category: category,
        country: country,
        year: year,
        director: director,
        imdb_score: imdb_score,
    })
    // console.log(res.json(movie));
    movie.save()
        .then(data => {
        }).catch(err => {
            console.log(err);
        })
})


//| /api/movies/:movie_id | `GET` | Empty | Get a movie. |
router.get('/:movie_id', (req, res, next) => {
    // res.render('movies', { title: 'Movies' });
    // res.send('Movies')
    Movies.findById(req.params.movie_id).then(movie => {
        res.json(movie);
    }).catch(err => console.log(err))

    // require('/')
})

//| /api/movies/:movie_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a movie with new info. |
router.put('/:movie_id', (req, res, next) => {
    Movies.findByIdAndUpdate(req.params.movie_id, req.body).then(movie => {
        res.json(movie);
    }).catch(err => console.log(err))

})


//| /api/movies/:movie_id | `DELETE` | Empty | Delete a movie. |
router.delete('/:movie_id', (req, res, next) => {
    Movies.findByIdAndRemove(req.params.movie_id).then(movie => {
        res.json(movie);
    }).catch(err => console.log(err))

})


//| /api/movies/top10 | `GET` | Empty | Get the top 10 movies. |
router.get('/top10/top10', (req, res, next) => {
    Movies.find({}).sort({imdb_score: 1}).limit(2).then(movie => {
        res.json(movie);
    }).catch(err => console.log(err))

    // require('/')
})


//| /api/movies/between/:start_year/:end_year | `GET` | Empty | Movies between two dates. |
router.get('/between/:start_year/:end_year', (req, res, next) => {
    const {start_year,end_year}=req.params
    Movies.find({year: {"$gte":parseInt(start_year), "$lte": parseInt(end_year)}}).then(movie => {
        res.json(movie);
    }).catch(err => console.log(err))

    // require('/')
})

module.exports = router;