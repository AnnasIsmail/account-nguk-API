const router = require("express").Router();
const logs = require('../model/logs');

router.get('/', async (req , res) => {
    const logs_result = await logs.find();
    res.status(200).json(logs_result);
});

router.post('/create', async (req , res) => {
    logs.insertMany({
        access_code: req.body.access_code,
        access_name: req.body.access_name,
        activity: req.body.activity,
        ip_address: req.body.ip_address,
        browser: req.body.browser,
        created_at: req.body.created_at
    },()=>{
        res.status(200).json({
            status: 200,
            data: 'success'
        });
    })

});

module.exports = router;