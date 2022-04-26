input.onButtonPressed(Button.A, function () {
    basic.showString("This Is Dude Jumper")
    basic.showString("Level 1")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . #
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . # .
        # # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # # . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # # #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # #
        . # . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . # #
        # . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Yes)
    basic.showString("Level 1 Done!")
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 D C5 E C5 F C5 G ", 500)
        basic.pause(1000)
        music.playMelody("C C D E F F G A ", 500)
        basic.pause(1000)
        music.playMelody("C A E C A C5 F B ", 600)
        basic.pause(1000)
        music.playMelody("C5 D C5 E C5 F C5 G ", 500)
        basic.pause(1000)
        music.playMelody("C C D E F F G A ", 500)
        basic.pause(1000)
        music.playMelody("C A E C A C5 F B ", 600)
        basic.pause(1000)
        music.playMelody("C5 D C5 E C5 F C5 G ", 500)
        basic.pause(1000)
        music.playMelody("C C D E F F G A ", 500)
        basic.pause(1000)
        music.playMelody("C A E C A C5 F B ", 600)
        basic.pause(1000)
        music.playMelody("C5 D C5 E C5 F C5 G ", 500)
        basic.pause(1000)
        music.playMelody("C C D E F F G A ", 500)
        basic.pause(1000)
        music.playMelody("C A E C A C5 F B ", 600)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Level 3")
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . # . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . #
        . . # # #
        . . # # .
        . . # # #
        . . # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # . # # .
        `)
    basic.pause(1000)
    basic.showString("K.O.")
    basic.showString("Shake to come back to LIFE!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Level 2")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . #
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # . #
        # # # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        # # # # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . . . . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . # # # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # # #
        # . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . # #
        # . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . #
        . # . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Yes)
    basic.showString("Level 2 Done!")
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Welcome Back!")
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . # # #
        . . # # #
        . . # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # # #
        . . # # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # # # #
        . . # # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # # #
        # . # # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Yes)
    basic.showString("Level 3 Done!")
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Fabulous)
    basic.showIcon(IconNames.Meh)
})
basic.forever(function () {
	
})
