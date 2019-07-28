//git init
//git add .
//git commit -m "First Commit"    
//create heroku
//git push heroku master
//heroku logs --to check any errors in heroku 
//

/*git init
git add filename.txt
git commit -m "first commmit
git status  --to check modificaions we have done
git diff filname.txt  --to check the diff in the after file updation from previous one
git checkout fileame.txt    ==to rollback the changes we have commited into the local repository
git log --to check status"

to add into git repos ------git remote add origin <paste ur of remote repos>
then -----------------------git push -u origin master */


const express=require("express");
const app=express();

app.use(express.static("public"));
app.get("/",function(req,res){

	res.sendFile(__dirname+"/index.html");

});

app.listen(process.env.PORT || 3000,function(){
	console.log("Server on port 3000 started");
});