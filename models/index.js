const mongoose = require('mongoose');
const DB_URL = "mongodb://loclhost:27017/selfProject2Db";

mongoose.connect(DB_URL,{
    useNewUrlParser : true,
    userFindparser : true,
    useCreateIndex : true,
    userUnifiedTopology: true,
})
.then(()=>console.log('MongoDB is conected....'))
.catch(()=>console.log(err));

module.exports = {
    User: require('./User'),
}