
 console.log("Hello World from basic.js");

//  window.onload=function(){
    var click_val = document.getElementById("Click");

//    console.log(click_val);
     click_val.addEventListener("click", onButtonClicked);

//  };

function onButtonClicked(){
    var in_text = document.getElementById("outputfield").value;
    let in_text_num = Number(in_text);
    console.log(in_text_num + 1);

    let  classify = size(in_text_num);
    
    document.getElementById("size_text").innerHTML  =  classify;
    
};
function size(in_value){
    small = "Small"
    medium = "Medium"
    large = "Large"
    if( isNaN(in_value) == true){
        alert("Enter a Numeric Value");
        document.getElementById("outputfield").value = null;
        return "";
    }
    else if(in_value < 10){
        return  small ;
    }
    else if(in_value <=19) {
        return  medium ;

    }
    else {return large}

}