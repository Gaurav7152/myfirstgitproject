//console.log("welcome");

const express=require('express');

const myfun1 =require('./middlewarefun1')

const myfun2 =require('./middlewarefun2')

require('dotenv').config();

const appObj = express();

console.log(process.env.PORT)

appObj.use(express.json())


appObj.get('/exportModule', myfun1, myfun2, (req,res) => {
        let name=req.body.Name;
        let surname=req.body.SurName;
        let age=req.query.Age;
        let branch=req.query.Branch;
    res.json({"msg": `HI My name is ${name} ${surname} and i am ${age} years old and i am ${branch} student`});
});



const PORT=5000;
appObj.listen(PORT,function(){
console.log(`the sserver is running on port:${PORT}`);
})