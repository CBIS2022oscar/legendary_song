input.onButtonPressed(Button.A, function () {
    music.setTempo(154)
    for (let index = 0; index < 50; index++) {
        music.rest(music.beat(BeatFraction.Breve))
        if (input.lightLevel() < 90) {
            music.playTone(392, music.beat(BeatFraction.Whole))
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else {
            if (input.lightLevel() < 30) {
                music.playTone(523, music.beat(BeatFraction.Whole))
                basic.showLeds(`
                    # . # . #
                    . # . # .
                    # # # # #
                    . # . # .
                    # . # . #
                    `)
            } else {
                music.playTone(415, music.beat(BeatFraction.Whole))
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    # . . . #
                    . # # # .
                    # . . . #
                    `)
            }
            if (input.lightLevel() < 50) {
                music.playTone(659, music.beat(BeatFraction.Whole))
                basic.showLeds(`
                    . # . . #
                    . . . . .
                    . . # # .
                    . # . . #
                    . . . . .
                    `)
            }
            if (input.lightLevel() < 65) {
                music.playTone(165, music.beat(BeatFraction.Whole))
                basic.showLeds(`
                    # . # . #
                    # # # # #
                    # . . . #
                    . # . # .
                    . . # . .
                    `)
            }
        }
    }
})
