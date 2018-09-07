var canvas = document.getElementById("canvasId")

var context = canvas.getContext("2d")

//code for drawing on canvas
context.moveTo(0,0)
context.lineTo(320,240)
context.stroke()

context.fillStyle="#ff0000"
context.fillRect(50, 50, 100, 20)
context.strokeRect(50, 50, 100, 20)

context.moveTo(160, 120)
context.lineTo(200, 160)
context.lineTo(120, 160)
context.fill()

context.font='40px serif'
context.fillText("Prafful Daga",  100, 100)



