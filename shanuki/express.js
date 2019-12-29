express=require("express");
app=express();
fs=require("fs");
bodyparser=require("body-parser");
mymodule=require("./cal");
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
	resp.sendFile("form1.html",{root:__dirname});
});

app.post("/calculate",function(req,resp){
	switch(req.body.btn){
		case "addition":
			
			resp.send("Addition:"+mymodule.addition(req.body.num1,req.body.num2));
			break;
		case "substract":
		    
			resp.send("Difference:"+mymodule.substract(req.body.num1,req.body.num2));
			break;
		case "multiply":
		    
			resp.send("Multiply:"+mymodule.multiply(req.body.num1,req.body.num2));
			break;
		case "division":
		    
			resp.send("Division:"+mymodule.division(req.body.num1,req.body.num2));
			break;
	}
});
	
	app.listen(3000,function(){
		console.log("server is running");
});
	
			