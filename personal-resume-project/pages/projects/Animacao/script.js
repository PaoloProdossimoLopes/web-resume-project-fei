const canvas = document.getElementById("ponteiro")
document.addEventListener("mousemove", function (evento) {
    react = canvas.getBoundingClientRect();
    x_mouse = evento.clientX;
    y_mouse = evento.clientY;

    const horizontalConstaintIsValid = ((x_mouse < 302) && (x_mouse > 7));
    const verticalConstaintIsValid = ((y_mouse < 300) && (y_mouse > 8));
    const boxEdgesValidation = (horizontalConstaintIsValid && verticalConstaintIsValid);

    if (boxEdgesValidation) {
        canvas.style.left = x_mouse + "px";
        canvas.style.top = y_mouse + "px";
    } else {
        canvas.style.left = react.left + "px";
        canvas.style.top = react.top + "px";
    }
})