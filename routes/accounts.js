const router = require("express").Router();
const access = require('../model/access');
const account = require('../model/accounts');

router.post('/', async (req , res) => {
    const access_result = await access.findOne({access_code: req.body.access_code});
    const account_result = await account.find({delete_status: false});
    if(access_result !== null){
        res.status(200).json(account_result);
    }else{
        res.status(201).json('Wrong Access Code!');
    }
});

router.post('/specific', async (req , res) => {
    const access_result = await access.findOne({access_code: req.body.access_code});
    const account_result = await account.findOne({_id: req.body._id});
    if(access_result !== null){
        res.status(200).json(account_result);
    }else{
        res.status(201).json('Wrong Access Code!');
    }
});

router.post('/add', async (req , res) => {
    await account.insertMany(req.body , (result ,  error)=>{
        res.status(200).json(result);
    });
});

router.post('/update', async (req , res) => {
    await account.updateOne({_id: req.body._id}, req.body).then((result ,  error)=>{
        res.status(200).json(result);
    });
});

router.post('/exist', async (req , res) => {
    const account_result = await account.findOne({puuid: req.body.puuid});
    if(account_result !== null){
        res.status(200).json('exist');
    }else{
        res.status(201).json('not exist');
    }
});

router.post('/delete', async (req , res) => {
    const access_result = await access.findOne({access_code: req.body.access_code});
    if(access_result !== null){
        account.updateOne({_id: req.body.idAccount},{delete_status: true}).then(()=> {
            res.status(200).json('Success Delete');
        });
    }
});

module.exports = router;