const mongoose = require('mongoose');

const accounts = mongoose.model('account',{
    puuid: {
        type: String,
    },
    username:{
        type: String,
    },
    password:{
        type: String,
    },
    owner:{
        type: String,
    },
    created_at:{
        type: String,
    },
    delete_status: {
        type: Boolean
    },
    update_at:{
        type: String,
    },
    update_by:{
        type: String,
    },
    skin: {
        type: Array,
    },
    agent: {
        type: Array,
    },
})

module.exports = accounts