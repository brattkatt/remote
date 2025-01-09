input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # . . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . . . . #
        . . . . #
        `)
})
basic.forever(function () {
    radio.setGroup(102)
})
