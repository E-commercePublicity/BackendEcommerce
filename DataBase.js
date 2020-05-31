const mysql=require('mysql')
require('dotenv').config()
//conexion BBDD
const mysqlConnection = mysql.createConnection({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE,
ssl: true
});

mysqlConnection.connect(function(err){
  if(err){
    console.log("No se pudo Connectar!");
   }
  else{
    console.log(" BD Conectada!")
  }
})

module.exports=mysqlConnection;