input.onButtonPressed(Button.A, function () {
    if (_type == "boy") {
        boy_ball_up.showImage(0)
    } else {
        girl_ball_up.showImage(0)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (_type == "boy") {
        boy_ball_up.showImage(0)
        basic.pause(1000)
        boy_ball_down.showImage(0)
    } else {
        girl_ball_up.showImage(0)
        basic.pause(1000)
        girl_ball_down.showImage(0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (_type == "boy") {
        boy_ball_down.showImage(0)
    } else {
        girl_ball_down.showImage(0)
    }
})
input.onGesture(Gesture.Shake, function () {
    a_girl.showImage(0)
    _type = "girl"
})
let _type = ""
let boy_ball_down: Image = null
let a_girl: Image = null
let girl_ball_down: Image = null
let girl_ball_up: Image = null
let boy_ball_up: Image = null
boy_ball_up = images.createImage(`
    . # # # #
    . # # # #
    . . # # #
    . . # # #
    . . . # #
    `)
girl_ball_up = images.createImage(`
    # # # # #
    # # . # #
    . . # # #
    . . # # #
    . . . # #
    `)
girl_ball_down = images.createImage(`
    . . # # #
    . . . # #
    . . # # #
    # # # # #
    # # . # #
    `)
a_girl = images.createImage(`
    . # # # #
    . . . # #
    . . # # #
    . . # # #
    . . . # #
    `)
let boy = images.createImage(`
    . . . # #
    . . . # #
    . . # # #
    # # # # #
    # # . # #
    `)
boy_ball_down = images.createImage(`
    . . . # #
    . . # # #
    . . # # #
    . # # # #
    . # # # #
    `)
boy.showImage(0)
_type = "boy"
