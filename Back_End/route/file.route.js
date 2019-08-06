const express = require('express');
const router = express.Router();
const fs = require('fs');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './public/files/')
    }
});

const upload = multer({ storage: storage });

//Create a new Course
router.post("/uploadfile", upload.single("file"), function (req, res, next) {
    // var new_file = new File;
    console.log(req.file)

    var data=fs.readFileSync(req.file.path);
    console.log(data)
    var currentData = data.toString();
    console.log(currentData)

    res.send({ id: "Added" });
})


module.exports = router;