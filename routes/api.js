const express = require('express')
const router = express.Router();

//modules api provides routing for
const timestamp = require('../Timestamp/time');

router.route('/:time').get(timestamp.parse)

module.exports = router;