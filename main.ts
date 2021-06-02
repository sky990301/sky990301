input.onButtonPressed(Button.A, function () {
    結束時間 = input.runningTime()
    basic.clearScreen()
    basic.showNumber((結束時間 - 開始時間) / 1000)
})
let 結束時間 = 0
let 開始時間 = 0
basic.showNumber(3)
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showNumber(2)
music.playTone(440, music.beat(BeatFraction.Whole))
basic.showNumber(1)
music.playTone(494, music.beat(BeatFraction.Whole))
basic.clearScreen()
basic.pause(randint(1000, 3000))
開始時間 = input.runningTime()
basic.showIcon(IconNames.Heart)
