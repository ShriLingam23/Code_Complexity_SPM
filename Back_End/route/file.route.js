const express = require('express');
const router = express.Router();
const fs = require('fs');
const complexityByType = require('../Complexity_Algorithm/ComplexityByType')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './public/files/')
    }
});

const upload = multer({ storage: storage });

//Create a new Course
router.post("/uploadfile", upload.single("file"), function (req, res, next) {
    
    // console.log(req.file)

    //data contains buffer type
    var data=fs.readFileSync(req.file.path);
    console.log(data)

    //currentData contains string data
    var currentData = data.toString();
    console.log(currentData)

    //Each line into array
    var lineArr = currentData.split(/(?:\r\n|\r|\n)/g);

    complexityByType(lineArr)
    // console.log(complexityByType(lineArr) )

    res.send({ id: "Added" });
})


module.exports = router;