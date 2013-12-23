var mymodule = require("./6.module.js");

mymodule(process.argv[2], process.argv[3], function(error, list){
	if (error){
		console.log(error);
	}else{
		list.forEach(function (item){
			console.log(item);
		});
	}
});
