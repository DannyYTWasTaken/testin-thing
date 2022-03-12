// REPLACE https://octiwhale.github.io/Klistery/start.html WITH YOUR PATH TO START.HTML

var urimodify = 0;
var locked = 1;
var effects = new Audio('menu.mp3');
var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#legal-notice');
if (!dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}

function confirmLegal() {
  dialog.showModal();
  effects.play();
  navigator.vibrate(75);
}
showDialogButton.addEventListener('click', function() {
  dialog.showModal();
  effects.play();
});
dialog.querySelector('.close').addEventListener('click', function() {
  dialog.close();
  window.location = 'about:blank';
});
dialog.querySelector('.cclose').addEventListener('click', function() {
  dialog.close();
  locked = 0;
  unlockBrowser();
  effects.play();
  navigator.vibrate(75);
});

function addressGo() {
  if (locked === 0) {
  var addressBar = document.getElementById("addressBar").value;
  var browserFrame = document.getElementById("browserFrame");
  browserFrame.src = addressBar;
  effects.play();
  navigator.vibrate(75);
  return false;
} else {
  dialog.showModal();
  effects.play();
}
}

function unlockBrowser() {
  var browserFrame = document.getElementById("browserFrame");
  browserFrame.src = 'https://octiwhale.github.io/Klistery/start.html';
}

function homebtn() {
  if (locked === 0) {
  var browserFrame = document.getElementById("browserFrame");
  browserFrame.src = 'https://octiwhale.github.io/Klistery/start.html';
  effects.play();
  urimodify === 0;
  return false;
} else {
  dialog.showModal();
  effects.play();
  navigator.vibrate(75);
}
}

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
  if(e.shiftKey && e.keyCode == 'F'.charCodeAt(0)) {
    locked = 0;
    dialog.close();
    effects.play();
    navigator.vibrate(75);
    return false;
  }
  if(e.shiftKey && e.keyCode == 'H'.charCodeAt(0)) {
    if(locked === 0) {
    var browserFrame = document.getElementById("browserFrame");
    browserFrame.src = 'https://octiwhale.github.io/Klistery/start.html';
    document.getElementById("home").focus();
    effects.play();
    navigator.vibrate(75);
    return false;
  } else {
    dialog.showModal();
    effects.play();
  }
  }
  if(e.shiftKey && e.keyCode == 'G'.charCodeAt(0)) {
    if (locked === 0) {
    if (urimodify === 1){
    var addressBar = document.getElementById("addressBar").value;
    var browserFrame = document.getElementById("browserFrame");
    browserFrame.src = addressBar;
    document.getElementById("confirm").focus();
    effects.play();
    urimodify = 0;
    navigator.vibrate(75);
    return false;
  } else if (urimodify === 0){
      document.getElementById("addressBar").focus();
      urimodify = 1;
      navigator.vibrate(75);
      return false;
    }
  }  else {
    dialog.showModal();
    effects.play();
}
}
}
