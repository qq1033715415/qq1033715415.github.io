var fnTextPopup=function(arr){if(!arr||!arr.length){return}var index=0;document.documentElement.addEventListener('click',function(event){var x=event.pageX,y=event.pageY;var eleText=document.createElement('span');eleText.className='text-popup';this.appendChild(eleText);if(arr[index]){eleText.innerHTML=arr[index]}else{index=0;eleText.innerHTML=arr[0]}eleText.addEventListener('animationend',function(){eleText.parentNode.removeChild(eleText)});eleText.style.left=(x-eleText.clientWidth/2)+'px';eleText.style.top=(y-eleText.clientHeight)+'px';index++})};fnTextPopup(['学习']);