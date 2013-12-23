var fs = require("fs");

module.exports = function(filePath, ext, callback){

fs.readdir(filePath, function(err, list){
	if (!err){
		callback(null,list.filter(function(item){
			return new RegExp("[.]"+ext+"$").test(item);
		}));;
	}else{
		callback(err);
	}
});

};



