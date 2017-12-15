$( document ).ready(function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
//добавляем изображение, которое будет использоваться как узор заливки
    var img = document.createElement("img");
    img.src="../images/gold.svg";
//отрисовка текста
    img.onload= function(){
        drawText();
    }
//функция, которая отрисовывает текст и заливает его текстурой из img
    function drawText() {
        ctx.font = "bold 200pt Oswald";
        ctx.fillStyle = ctx.createPattern(img, 'repeat');
        ctx.textAlign = 'center';
        var x = canvas.width / 2;
        ctx.fillText("WATER", x, 400);
        ctx.fill();
    }
});
