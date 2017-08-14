var button =document.getElementByid('counter');
var counter=0;


button.onClick = function(){
  counter=counter+1;
  var span = document.getElementByid('count');
  span.innerHTML=counter.toString();
};