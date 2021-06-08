var channel = new MessageChannel();
var queBox = document.querySelector('div#que .box');

// Listen for message received from parent
window.addEventListener('message', onMessage);

// Handle received message
function onMessage(e) {
    moveBoxForward(queBox)
}

function moveBoxForward(box) {
  const boxRect = box.getBoundingClientRect()
  const bodyRect = document.body.getBoundingClientRect()
  
  if (box.style.left == "") {
      box.style.left = "1px"
  } else if (boxRect.x > bodyRect.width) {
      box.style.left = "-" + boxRect.width + "px"
  } else {
      box.style.left = parseInt(box.style.left) + 1 + "px"
  }
}