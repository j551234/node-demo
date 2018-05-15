const Express =require('express');
const app=Express();
const helmet=require('helmet');
const serveStatic =require('serve-static');

app.use(helmet());
app.use(serveStatic('public'));

app.get('/', (req, res, next) => {
    console.log('middleware');
    next(); 
   }); 


app.get('/',function(req,res){
    console.log('Hello');
    res.send('hello world');
});
app.get('/home',function(req,res){
    res.send('hello home');
});


app.listen(process.env.PORT || 3000,function(){
    console.log('start listen https://localhost:3000')
});
