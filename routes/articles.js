const express = require('express');
const router = express.Router(); //this will give us a router that'll use to create views.


router.get('/test', (req, res)=>{
    res.send('in articles')
});

module.exports = router;