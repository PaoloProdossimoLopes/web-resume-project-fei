const red_square = document.getElementById("red-square");
const red_square_ctx = red_square.getContext("2d");
red_square_ctx.fillStyle = "#FF0000";
red_square_ctx.fillRect(0,0,50,50);

const blue_square = document.getElementById("blue-square");
const blue_square_ctx = blue_square.getContext("2d");
blue_square_ctx.fillStyle = "#0022ff";
blue_square_ctx.fillRect(450,0,50,50);

var blue_diagonal_line = document.getElementById("red-horizontal-line");
var blue_dialonal_context = blue_diagonal_line.getContext("2d");
blue_dialonal_context.moveTo(0, 0);
blue_dialonal_context.strokeStyle = "#FF0000";
blue_dialonal_context.lineTo(250, 250);
blue_dialonal_context.stroke();

var blue_diagonal_line = document.getElementById("blue-horizontal-line");
var blue_dialonal_context = blue_diagonal_line.getContext("2d");
blue_dialonal_context.moveTo(500, 0);
blue_dialonal_context.lineTo(250, 250);
blue_dialonal_context.strokeStyle = "#0022ff";
blue_dialonal_context.arc(250, 0, 250, 0, 0);
blue_dialonal_context.stroke();