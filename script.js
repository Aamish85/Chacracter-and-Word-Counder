let textbox = document.getElementById("textbox");
    
textbox.addEventListener('input', function () {

    var text = this.value;
    let char  = text.length;
    document.getElementById("character").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    let cleanlist = words.filter(function(elm){
     return elm != "";
    });
    
    document.getElementById("Word").innerHTML =  cleanlist.length;

});