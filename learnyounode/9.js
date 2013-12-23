var http = require("http");

var urls = process.argv.splice(2,3);

var lines = ["","",""];
var completed = [false, false, false];

for (var i = 0; i<3; i++){
	(function(idx){
        http.get(urls[idx], function(response){
	        response.setEncoding("utf8");
	        response.on("data", function (data){
		        lines[idx] += data;
	        });
	        response.on("end", function(){
		        completed[idx] = true;
                if (completed.every(function tr(item){return item;})){
                    lines.forEach(function (line){
                        console.log(line);                    
                    });
                }
	        });
        });		
	})(i);
}


