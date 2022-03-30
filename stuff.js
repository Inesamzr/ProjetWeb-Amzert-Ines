const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



const db = require('./db');

router.get('/coachs', function(req, res){
    db.queryAll('coach', function(result){
        res.status(200).send(result)
    })
})

module.exports = router;