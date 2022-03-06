//console.log(window.document)
var title=document.getElementById("title")
console.log(title)
var sayHello=function(){
    console.log(this)
    console.log("Hello b0ss");
    var name=document.getElementById("in1").value;
    var message="Hello "+name+" !";
    document.getElementById("content").innerHTML="<br><h2>"+message+"</h2>";
    //var title=document.querySelector("h1").textContent;
    //title+=" "+name;
    //document.querySelector("h1").textContent=title
}
document.querySelector("button").addEventListener("click",sayHello);