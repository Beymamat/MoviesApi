const mongoose=require('mongoose');

const schema=mongoose.Schema;

const DirectorsSchema=new schema({
    name:{
        type: String,
        default:"foo"
    },
    surname: {
        type: String,
        default: "bar"
    },
    bio: {
        type: String,
        default: "lorem ipsum"
    }

})

module.exports=mongoose.model('directors', DirectorsSchema)