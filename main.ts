input.onButtonPressed(Button.A, function () {
    Ycord += 1
})
let lite = 32
let Xcord = 1
let Ycord = 1
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_Display()
LCD1IN8.LCD_SetBL(lite)
LCD1IN8.LCD_Display()
basic.forever(function () {
    LCD1IN8.DrawPoint(
    Xcord,
    0,
    LCD1IN8.Get_Color(LCD_COLOR.BLUE),
    DOT_PIXEL.DOT_PIXEL_1
    )
})
