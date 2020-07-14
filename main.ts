input.onButtonPressed(Button.A, function () {
    Ycord = randint(1, 128)
    for (let index = 0; index <= 160; index++) {
        Xcord = index
        LCD1IN8.DrawPoint(
        Xcord,
        64,
        LCD1IN8.Get_Color(LCD_COLOR.BLUE),
        DOT_PIXEL.DOT_PIXEL_1
        )
    }
    LCD1IN8.LCD_Display()
})
input.onGesture(Gesture.Shake, function () {
    LCD1IN8.LCD_Clear()
    LCD1IN8.LCD_Display()
})
let Ycord = 0
let Xcord = 0
let lite = 9
Xcord = 1
Ycord = 1
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_Display()
LCD1IN8.LCD_SetBL(lite)
LCD1IN8.LCD_Display()
basic.forever(function () {
	
})
