input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
    basic.clearScreen()
})
basic.showString("Tony 6A 11")
basic.forever(function () {
	
})
