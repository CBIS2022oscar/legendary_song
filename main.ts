input.onButtonPressed(Button.A, function () {
    music.setTempo(122)
    for (let index = 0; index < 50; index++) {
        music.rest(music.beat(BeatFraction.Breve))
        if (input.lightLevel() < 90) {
            music.playTone(392, music.beat(BeatFraction.Half))
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else {
            if (input.lightLevel() < 30) {
                music.playTone(523, music.beat(BeatFraction.Breve))
                basic.showLeds(`
                    # . # . #
                    . . . . .
                    # # # # #
                    . . . . .
                    # . # . #
                    `)
            } else {
                music.playTone(370, music.beat(BeatFraction.Breve))
            }
        }
    }
})
