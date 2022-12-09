const mongoose = require('mongoose');

const logs = mongoose.model('log',{
    access_code: {
        type: String,
    },
    access_name: {
        type: String,
    },
    activity:{
        type: String,
    },
    ip_address:{
        type: String,
    },
    browser:{
        type: String,
    },
    created_at:{
        type: String,
    },
})

module.exports = logs