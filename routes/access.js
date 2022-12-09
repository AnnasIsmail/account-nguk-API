const router = require("express").Router();
const access = require('../model/access');

router.post('/', async (req , res) => {
    const access_result = await access.findOne({access_code: req.body.access_code});
    if(access_result !== null){
        res.status(200).json(access_result);
    }else{
        res.status(201).json('Wrong Access Code!');
    }
});

router.post('/GiveNewAccess', async (req , res) => {
    const access_result = await access.insertMany( req.body ,()=>{
        if(access_result !== null){
            res.status(200).json(access_result);
        }else{
            res.status(201).json('Wrong Access Code!');
        }
    });
});

module.exports = router;