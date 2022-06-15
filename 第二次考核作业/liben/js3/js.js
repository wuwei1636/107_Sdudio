let pic2_1 = document.querySelector('#pic2_1')
pic2_1.innerHTML += pic2_1.innerHTML

let left=0
let timer
timer=setInterval(function(){
left -=2
if(left === -2300){
  left = 50
}
pic2_1.style.left = left+'px'
},50)

