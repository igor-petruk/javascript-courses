var fs = require("fs");

var filePath = process.argv[2];
var ext = process.argv[3];

fs.readdir(filePath, function(err, list){
	if (!err){
		var filtered = list.filter(function(item){
			return new RegExp("[.]"+ext+"$").test(item);
		});
		filtered.forEach(function(item){
			console.log(item);
		});
	}
});



