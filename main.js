canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.



background_image = "lienzo.jpg";

aguila_image = "aguila_real.png";

aguila_x = 10;
aguila_y = 10;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src=background_image;

    aguila_imgTag= new Image();
    aguila_imgTag.onload = uploadaguila;
    aguila_imgTag.src=aguila_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadaguila(){
    ctx.drawImage(aguila_imgTag, aguila_x, aguila_y, 100, 90)
}

		function my_keydown(e)
		{
			keyPressed = e.keyCode;
			console.log(keyPressed);
				if(keyPressed=="38")
				{
					up();
				}
				if(keyPressed=="40")
				{
					down();
				}
				if(keyPressed=="37")
				{
					left();
				}
				if(keyPressed=="39")
				{
					right();
				}
		}		
	

	window.addEventListener("keydown", my_keydown)

	function up()
	{
		if(aguila_y >=0)
		{
			aguila_y = aguila_y - 10;
				uploadBackground();
				uploadaguila();
		}
	}
	function down()
	{
		if(aguila_y <=500)
			{
				aguila_y = aguila_y + 10;
					uploadBackground();
					uploadaguila();
			}
	}
	function right()
	{
		if(aguila_x <= 500)
			{
				aguila_x = aguila_x + 10;
					uploadBackground();
					uploadaguila();
			}
	}
	function left()
	{
		if(aguila_x >= 0)
			{
				aguila_x = aguila_x - 10;
					uploadBackground();
					uploadaguila();
			}
	}