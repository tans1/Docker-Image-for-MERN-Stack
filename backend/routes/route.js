const express = require('express');
const router = express.Router();
const { GetAll,AddTask} = require('../controller/controller');

router.get('/all', GetAll);
router.post('/create',AddTask);

module.exports = router










