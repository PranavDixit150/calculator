function calculate(){
    var a = document.getElementById('num1').value;
    var b = document.getElementById('operator').value;
    var c = document.getElementById('num2').value;

    if(b=='+'){
        var result= parseInt(a)+parseInt(c);
    }
    if(b=='-'){
        var result= parseInt(a)-parseInt(c);
    }
    if(b=='*'){
        var result= parseInt(a)*parseInt(c);
    }
    if(b=='/'){
        var result= parseInt(a)/parseInt(c);
    }
    document.getElementById("result").value=result;
    

}


