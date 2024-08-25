const express = require('express');
const { processData, getOperationCode } = require('../controllers/bfhlController');
const router = express.Router();

// POST request handler
router.post('/', processData);

// GET request handler
router.get('/', getOperationCode);

module.exports = router;
