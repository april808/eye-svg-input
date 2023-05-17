var vm = new Vue({
  el: "#app",
  data: {
    isHide: false,
    type: 'text'
  },
  watch: {
    isHide(hide){
      setTimeout(()=>{
        this.type = (hide) ? 'password' : 'text'
      },200)
    }
  }
})


const eye = document.getElementById("eye")
const eye_top = document.querySelector(".eye-top")
/*抓到Attr value*/
const eye_topAttr = eye_top.getAttribute("d")
/*刪除Attr removeAttribute("d") */
/*更新Attr setAttribute("name","value") */

eye.addEventListener("click",()=>{
  
  /*假如判斷用contains*/
  if(vm.isHide){
    console.log("enter"+" eyeClose")
    setTimeout(( () => startAnimation(10) ), 200)
    // eye_top.setAttribute("d","M10,50 Q50,90 90,50")
  }else {
    console.log("leave"+" eyeOpen")
    // eye_top.setAttribute("d","M10,50 Q50,10 90,50")
    startAnimation(-90)
  }
  
},false);


// 30天實作線上簡報播放機制系列 第 7 篇---------- 07 - 動畫的基礎 /////
// https://ithelp.ithome.com.tw/articles/10186735
function startAnimation(countA) {
  var start = null;
  var limit = 281;
  var time = 0;
  requestAnimationFrame(animation);
  function animation(t) {
    time++;
    if(start === null) start = t;
    if(t-start < limit && time<9) {
      console.log(t, start, time);
      
      eye_top.setAttribute("d","M10,50 Q50,"+ (Math.abs(countA+=10)) +" 90,50")
      
      requestAnimationFrame(animation);
    } else {
      console.log('done.');
    }
  }
}
// console.log(vm.isHide)