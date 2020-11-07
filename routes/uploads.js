const express = require('express');
const router = express.Router();
const uploadControllers =  require('../controllers/upload');
const { uploadImg } =  require('../helpers/upload-image');

/* GET users listing. */
router.post('/', uploadImg.any(), uploadControllers.upload);

module.exports = router;
