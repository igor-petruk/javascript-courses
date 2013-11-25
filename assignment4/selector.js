var $ = function (selector) {
    var selectedItems = document.querySelectorAll(selector);
    selectedItems.width = function(newValue){
        for (var i = 0; i<selectedItems.length; i++){
            selectedItems[i].style.width = newValue+"px";
        }
    }
    selectedItems.height = function(newValue){
        for (var i = 0; i<selectedItems.length; i++){
            selectedItems[i].style.height = newValue+"px";
        }
    }

    return selectedItems;
};

var $div = $("div");
console.log($div);

var $red = $(".red");

$red.height(35);
$red.width(100);
