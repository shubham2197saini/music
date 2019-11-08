const http = require('http');
const MongoClient=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
/*var expressValidator=require('express-validator');
var session=require('express-session');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;



var routes=require('./routes/index');
var routes=require('./routes/users');*/

var app=express();
var port=3000;


        app.use(function(req,res,next)
        {
            console.log('Time :',Date.now());
            next();
        });


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'includes')));
//app.use(express.static(path.join(__dirname,'public')));


/*app.use(session({
    secret:'secret',
    saveUninitialized:true,
    resave:true
}));

app.use(passport.initialize());
app.use(passport.session());

/*app.use(express-validator({
    errorFormatter:function(param,msg,value){
        var namespace=param.split('.'),
        root=namespace.shift(),
        formparam=root;

        while(namespace.length){
            formparam+= '['+namespace.shift() +']';
        }
        return{
            param:formparam,
            msg:msg,
            value:value
        };
    }
}));*/

/*app.use(flash());
app.use(function(req,res,next){
    res.locals.messages=require('express-messages')(req,res);
    next();
});*/

//app.use('/',routes);
//app.use('/users',users);




app.get('/',function(req,res){
    res.render('index',{
     "title":"AudioMack"
    });
});

app.get('/login',function(req,res){
    res.render('index',{
     "title":"AudioMack"
    });
});


app.get('/home',function(req,res){
    res.render('index',{
     "title":"AudioMack"
    });
});

app.get('/about',function(req,res){
    res.render('about',{
        "title":"AudioMack"
       });
});


app.get('/contact',function(req,res){
    res.render('contact',{
        "title":"AudioMack"
       });
});


app.get('/register',function(req,res){
    res.render('register',{
        "title":"AudioMack"
       });
});

//mongo connected
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("music_system");
    dbo.createCollection("users", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("music_system");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

app.listen(port);
console.log("server started at port "+port);

module.exports=app;


