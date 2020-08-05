input.onButtonPressed(Button.A, function () {
    끝 = 0
})
input.onButtonPressed(Button.B, function () {
    끝 = 1
})
let 끝 = 0
OLED.init(64, 128)
let 감지_센서 = 0
let 인원수 = 0
let 벌칙_당첨 = 0
끝 = 0
basic.forever(function () {
    if (끝 == 0) {
        if (감지_센서 == 0 && pins.digitalReadPin(DigitalPin.P1) == 1) {
            감지_센서 = 1
            인원수 += 1
            OLED.clear()
            OLED.writeNumNewLine(인원수)
        }
        if (감지_센서 == 1 && pins.digitalReadPin(DigitalPin.P1) == 0) {
            감지_센서 = 0
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        OLED.clear()
        벌칙_당첨 = randint(1, 인원수)
        basic.showNumber(벌칙_당첨)
        basic.pause(3000)
        인원수 = 0
    }
})
