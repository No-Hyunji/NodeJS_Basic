// express Routing

// 1. express framework import
var express = require("express");

// 2. express framework를 사용하여 router객체 생성 
var router = express.Router();

// get("/")는 app.js에서 Router로 설정한 주소와
// 합성되어 실제 요청 주소가 된다
// @RequestMapping으로 설정되는 주소 URL들 
router.get("/",function(req,res){
    res.send("HOME GET Mapping");
});
router.get("/my",function(req,res){
    // res.send("My GET Mapping");
    res.render("home");
});
router.get("/input",function(req,res){
    // res.send("INPUT POST Mapping");
    let m_user = req.body.m_user
    res.send("입력한 user : " + m_user);
});
router.post("/",function(req,res){
    res.send("HOME POST Mapping");
});

// express를 사용한 router설정객체를 
// app.js에서 import하여 사용 할 수 있도록 내보내는 기능
module.exports = router;