const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("test file")
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    console.log("test file",file.originalname)
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;