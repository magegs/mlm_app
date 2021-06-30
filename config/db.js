var mysql=require('mysql');
var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"askwaay",
    multipleStatements:true
});
mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connected success");
    }
    else
    {
      console.log("Connection failed");
    }
})