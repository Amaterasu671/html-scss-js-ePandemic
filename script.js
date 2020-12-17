var listInfoBlock = document.getElementsByClassName('infos-block');
document.getElementsByClassName('infos-block infos')[0].style.opacity = '1';

function changeSection(element){
  var elementActive = document.getElementsByClassName(element)[0];
  elementActive.style.zIndex = '5';
  elementActive.style.opacity = '1';
  elementActive.style.transitionDuration = '0.5s';
  Array.prototype.forEach.call(listInfoBlock, elm => elm != elementActive ? elm.style.zIndex = '0' : elm.style.zIndex = '5');
  Array.prototype.forEach.call(listInfoBlock, elm => elm != elementActive ? elm.style.opacity = '0' : elm.style.opacity = '1');
}
