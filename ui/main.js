console.log('Loaded!');
var element= document.getElementById(`main-text`);
element.innerHTML = `New Value`;
var img=document.getElementById("maddi");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+3;
    img.style.marginLeft=marginLeft + `px`;
}
img.onclick = function (){
    var interval =setInterval(moveRight,100);
    //img.style.marginLeft = '100px';
}