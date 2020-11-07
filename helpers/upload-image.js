var multer  = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var fs = require('fs');

require('dotenv').config();

aws.config.update({
	accessKeyId: process.env.ACCESS_KEY_ID_S3,
	secretAccessKey: process.env.ACCESS_SECRET_KEY_S3
});

const s3 = new aws.S3();


// const uploadImg = multer({
// 	storage: multer.diskStorage({
// 	  destination: function (req, file, cb) {
// 	    cb(null, 'tmp/img')
// 	  },
// 	  filename: function (req, file, cb) {
// 	    cb(null, 'ua_'+ Date.now() + '-' + file.originalname)
// 	  }
// 	})
// })

const uploadImg = multer({
	storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_IMG,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})


module.exports = {
	s3,
	uploadImg
}
