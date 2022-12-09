const mongoose = require('mongoose');

const access = mongoose.model('access',{
    access_code: {
        type: String,
    },
    name:{
        type: String,
    },
    role:{
        type: String,
    },
    created_at:{
        type: String,
    },
})

module.exports = access