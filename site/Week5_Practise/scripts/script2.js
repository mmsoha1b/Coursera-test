document.addEventListener("DOMContentLoaded",function(event){
        var change_bg = function(event){
            console.log(this);
            console.log(event);
            console.log('ok');
            if(event.altKey===true){
                this.style.backgroundColor='#ffffff';
            }
        }   
        //console.log(document.querySelector("button").textContent);
        document.querySelector("body").addEventListener("mousemove",change_bg);
}
    );