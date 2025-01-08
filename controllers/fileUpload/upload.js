const multer = require('multer');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Define upload folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // File will have original name
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
