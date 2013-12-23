var fs = require("fs");

var filePath = process.argv[2];

fs.readFile(filePath, "utf8", function(err, data){
	
	if (!err){
		console.log(data.toString().split("\n").length - 1);	
	}
});



