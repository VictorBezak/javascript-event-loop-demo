const rafBox = document.querySelector('div#raf .box')  // requestAnimationFrame
const stBox = document.querySelector('div#st .box')  // setTimeout
const queBox = document.querySelector('div#que .box')  // queueTask

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

function moveRafBox() {
    moveBoxForward(rafBox)
    requestAnimationFrame(moveRafBox)
}

function moveStBox() {
    moveBoxForward(stBox)
    setTimeout(moveStBox, 0)
}

moveRafBox()
moveStBox()