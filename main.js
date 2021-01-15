document.addEventListener("mousemove",function(e){
    var body = document.querySelector('body');
    var bubbles = document.createElement("span");
    var x = e.offsetX;
    var y = e.offsetY;
    bubbles.style.left=x+"px";
    bubbles.style.top = y + "px";
    var size = Math.random() * 100;
    bubbles.style.width =  size + "px";
    bubbles.style.height = size + "px";
    body.appendChild(bubbles);

    setTimeout(() => {
        bubbles.remove();
        
    }, 4000);
})