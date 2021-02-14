const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

module.exports = () => {
    mongoose.connect('mongodb+srv://test:test@cluster0.nnuvc.mongodb.net/movies', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("MongoDb ga online ulandi");
    });
}
