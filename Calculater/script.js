
function clearscreen(){
    document.getElementById("result").value =" ";
}
function display(value){
    document.getElementById("result").value+=value;
}
function result(){
    var a=document.getElementById("result").value;
    var c=eval(a);
    document.getElementById("result").value=c;
}
