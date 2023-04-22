const db =require("./connection") ;

db.run("CREATE TABLE User (email TEXT PRIMARY KEY,  password TEXT, firstName TEXT, lastName TEXT, phoneNo TEXT)");
