const Express =require('express');
const app=Express();
app.get('/',function(req,res){
    console.log('Hello');
    res.send('hello world');
});
app.listen(3000,function(){
    console.log('start listen https://localhost:3000')
});
