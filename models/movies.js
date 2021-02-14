const mongoose = require('mongoose');

const schema=mongoose.Schema;


const MoviesSchema=new schema({
    title: {
        type: String,
        default: 'foo'
    },
    category:{
        type: String,
        default: "bar"
    },
    country:{
        type: String,
        default: "Uzbekistan"
    },
    year:{
        type:Number,
        defaul: 1990,
        min: 1980,
        max: 2021
    },
    director: {
        type: Number,
        default:0
    },
    imdb_score:{
        type: Number,
        defauld:0
    },
    creatAt:{
        type:Date,
        default: Date.now
    }

})

module.exports=mongoose.model('movies', MoviesSchema)