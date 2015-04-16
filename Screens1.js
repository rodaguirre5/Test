
$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	var b1x, b1y, b2x, b2y, b3x, b3y;
	var b1w, b1h, b2w, b2h, b3w, b3h;
	var b1xend, b1yend, b2xend, b2yend, b3xend, b3yend;
	var screen;
	var click1, click2, click3;
	var square1, square2, square3, square4, square5, square6, square7, square8, square9;
	var box1, box2, box3, box4, box5, box6, box7, box8, box9;
	var logo = new Image();
	var background = new Image();
	var CR7 = new Image();
	var LM10 = new Image();
	var Frame = new Image();
	var Leo = new Image();
	var Ron = new Image();
	var Bendtner = new Image();
	var SadCR7 = new Image();
	
	
	var counter;
	
	var testNum = 10000;
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	b1x = 192;
	b1xend = 448;
	b1y = 225;
	b1yend = 290;
	b1w = 256;
	b1h = 65;
	
	b2x = 192;
	b2xend = 448;
	b2y = 305;
	b2yend = 370; 
	b2w = 256;
	b2h = 65;
	
	b3x = 192;
	b3xend = 488;
	b3y = 385;
	b3yend = 450;
	b3w = 256;
	b3h = 65;
	
	backx = 570;
	backxend = 620;
	backy = 20;
	backyend = 50;
	backw = 50;
	backh = 30;

	logo.src = 'TTT.jpg';
	background.src = 'Board.jpg';
	CR7.src = 'CR7.png';
	LM10.src = 'LM10.png';
	Frame.src = 'Frame.png';
	Leo.src = 'LM10B.jpg';
	Ron.src = 'CR7BDR.jpg';
	Bendtner.src = 'Bendtner.jpg';
	SadCR7.src = 'SadCR7.png';
	
	counter = 0;
	
	screen = 0;
	clcik1 = false;
	click2 = false;
	click3 = false;
	
	square1 = false;
	square2 = false;
	square3 = false;
	square4 = false;
	square5 = false;
	square6 = false;
	square7 = false;
	square8 = false;
	square9 = false;
	box1 = false;
	box2 = false;
	box3 = false;
	box4 = false;
	box5 = false;
	box6 = false;
	box7 = false;
	box8 = false;
	box9 = false;
	
	
	//////////
	///STATE VARIABLES
	
	
	
	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


		
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, 640,480);	
		
		ctx.drawImage(background,0,0,640,480);
		
		//Menu Screen
		if(screen == 0){

		ctx.fillStyle='#FFA700';
		ctx.fillRect(b1x, b1y, b1w, b1h);			//Start Game Button
		ctx.fillStyle='black';
		ctx.font="22px Arial";
		ctx.fillText("Start Game",b1x + b1w/2 - ctx.measureText("Start Game").width/2, b1y+75/2);
		
		ctx.fillStyle='red';
		ctx.fillRect(b2x, b2y, b2w, b2h);			//Instructions Button
		ctx.fillStyle='black';
		ctx.fillText("Instructions",b2x + b2w/2 - ctx.measureText("Instructions").width/2, b2y+75/2);
		
		ctx.fillStyle='#04B404';						//Assignment Button
		ctx.fillRect(b3x, b3y, b3w, b3h);
		ctx.fillStyle='black';
		ctx.fillText("Assignment Viewer",b3x + b3w/2 - ctx.measureText("Assignment Viewer").width/2, b3y+75/2);
		ctx.drawImage(logo,80,20,480,147);
		
		
		// Game screen
		}else if(screen == 1){

		ctx.fillStyle='orange';
		ctx.fillRect(backx, backy,backw,backh);
		ctx.fillStyle='black';
		ctx.font="12px Arial";
		ctx.fillText("Back to",575,30);
		ctx.fillText("menu",575,40);
		
		ctx.fillStyle = 'black'
	    ctx.fillRect(w/3,0,1,h);
		ctx.fillRect(w/3*2,0,1,h);
		ctx.fillRect(0,h/3,w,1);
		ctx.fillRect(0,h/3*2,w,1);
		
		//Messi Head
		//Messi square 1
		if (square1 == true){
		ctx.drawImage(LM10,0,0,w/3,h/3);
		}		
		//Messi square 2
		if (square2 == true){
		ctx.drawImage(LM10,w/3,0,w/3,h/3);
		}
		//Messi square 3
		if (square3 == true){
		ctx.drawImage(LM10,w/3*2,0,w/3,h/3);
		}		
		//Messi square 4
		if (square4 == true){
		ctx.drawImage(LM10,0,h/3,w/3,h/3);
		}	
		//Messi square 5
		if (square5 == true){
		ctx.drawImage(LM10,w/3,h/3,w/3,h/3);
		}		
		//Messi square 6
		if (square6 == true){
		ctx.drawImage(LM10,w/3*2,h/3,w/3,h/3);
		}	
		//Messi square 7
		if (square7 == true){
		ctx.drawImage(LM10,0,h/3*2,w/3,h/3);
		}		
		//Messi square 8
		if (square8 == true){
		ctx.drawImage(LM10,w/3,h/3*2,w/3,h/3);
		}
		//Messi square 9
		if (square9 == true){
		ctx.drawImage(LM10,w/3*2,h/3*2,w/3,h/3);
		}
		
		
		//Ronaldo Head
		//Ronaldo square 1
		if (box1 == true){
		ctx.drawImage(CR7,0,0,w/3,h/3);
		}		
		//Ronaldo square 2
		if (box2 == true){
		ctx.drawImage(CR7,w/3,0,w/3,h/3);
		}		
		//Ronaldo square 3
		if (box3 == true){
		ctx.drawImage(CR7,w/3*2,0,w/3,h/3);
		}		
		//Ronaldo square 4
		if (box4 == true){
		ctx.drawImage(CR7,0,h/3,w/3,h/3);
		}		
		//Ronaldo square 5
		if (box5 == true){
		ctx.drawImage(CR7,w/3,h/3,w/3,h/3);
		}		
		//Ronaldo square 6
		if (box6 == true){
		ctx.drawImage(CR7,w/3*2,h/3,w/3,h/3);
		}		
		//Ronaldo square 7
		if (box7 == true){
		ctx.drawImage(CR7,0,h/3*2,w/3,h/3);
		}	
		//Ronaldo square 8
		if (box8 == true){
		ctx.drawImage(CR7,w/3,h/3*2,w/3,h/3);
		}	
		//Ronaldo square 9
		if (box9 == true){
		ctx.drawImage(CR7,w/3*2,h/3*2,w/3,h/3);
		}
		
		//Alert if Messi Wins
		if(square1 == true && square2 == true && square3 == true){
			screen=2;
		}if(square4 == true && square5 == true && square6 == true){
			screen=2;
		}if(square7 == true && square8 == true && square9 == true){
			screen=2;
		}if(square1 == true && square4 == true && square7 == true){
			screen=2;
		}if(square2 == true && square5 == true && square8 == true){
			screen=2;
		}if(square3 == true && square6 == true && square9 == true){
			screen=2;
		}if(square1 == true && square5 == true && square9 == true){
			screen=2;
		}if(square3 == true && square5 == true && square7 == true){
			screen=2;
		}
		
		//Alert if Ronaldo Wins 
	
		if(box1 == true && box2 == true && box3 == true){
			screen=3;
		}if(box4 == true && box5 == true && box6 == true){
			screen=3;
		}if(box7 == true && box8 == true && box9 == true){
			screen=3;
		}if(box1 == true && box4 == true && box7 == true){
			screen=3;
		}if(box2 == true && box5 == true && box8 == true){
			screen=3;
		}if(box3 == true && box6 == true && box9 == true){
			screen=3;
		}if(box1 == true && box5 == true && box9 == true){
			screen=3;
		}if(box3 == true && box5 == true &&box7 == true){
			screen=3;
		}else if((box1==true || square1==true) && (box2==true || square2==true) && (box3==true || square3==true) && (box4==true || square4==true) && (box5 ==true || square5 ==true) && (box6==true || square6==true) && (box7==true || square7==true) && (box8==true || square8==true) && (box9==true || square9==true)){
		screen=5
		}
	
		//Alert if draw
		//if(box1 = true || square1 == true && box2 == true || square2 == true && box3 == true || square3 == true && box4 == true || square4 == true && box5 == true || square5 == true && box6 == true || square6 == true && box7 == true || square7 == true && box8 == true || square8 == true && box9 == true || square19 == true){
		//screen = 5;
		//}
		
	
		//Messi Win Screen
		}else if(screen == 2){
				
		ctx.drawImage(Leo, w/2 - 140, 60, 280, h/2 - 20);	
		ctx.drawImage(Frame, w/2 - 150, 50, 300, h/2 );		
		ctx.fillStyle='black';
		ctx.font="30px Arial";
		ctx.fillText("Lionel Messi Wins!",b2x + b2w/2 - ctx.measureText("Lionel Messi Wins!").width/2, b2y+75/2);	
		ctx.fillStyle='#04B404';						//Assignment Button
		ctx.fillRect(b3x, b3y, b3w, b3h);
		ctx.fillStyle='black';
		ctx.fillText("Play Again!",b3x + b3w/2 - ctx.measureText("Play Again!").width/2, b3y+75/2);
		
		ctx.fillStyle='orange';
		ctx.fillRect(backx, backy,backw,backh);
		ctx.fillStyle='black';
		ctx.font="12px Arial";
		ctx.fillText("Back to",575,30);
		ctx.fillText("menu",575,40);
	


	
		//Ronaldo Win Screen
		}else if(screen == 3){
				
		ctx.drawImage(Ron, w/2 - 140, 60, 280, h/2 - 20);	
		ctx.drawImage(Frame, w/2 - 150, 50, 300, h/2 );		
		ctx.fillStyle='black';
		ctx.font="30px Arial";
		ctx.fillText("Cristiano Ronaldo Wins!",b2x + b2w/2 - ctx.measureText("Cristiano Ronaldo Wins!").width/2, b2y+75/2);
		ctx.fillStyle='#04B404';						//Assignment Button
		ctx.fillRect(b3x, b3y, b3w, b3h);
		ctx.fillStyle='black';
		ctx.fillText("Play Again!",b3x + b3w/2 - ctx.measureText("Play Again!").width/2, b3y+75/2);
		
		ctx.fillStyle='orange';
		ctx.fillRect(backx, backy,backw,backh);
		ctx.fillStyle='black';
		ctx.font="12px Arial";
		ctx.fillText("Back to",575,30);
		ctx.fillText("menu",575,40);
		
		}
		//Instructions screen
		else if(screen == 4){
		
		ctx.fillStyle='white';
		ctx.font="40px Arial";
		ctx.fillText("Instructions",b2x + b2w/2 - ctx.measureText("Instructions").width/2, 70);
		
		ctx.font="30px Arial";
		ctx.fillText("You and your opponent take turns to",b2x + b2w/2 - ctx.measureText("You and your opponent take turns to").width/2, 150);
		ctx.fillText("mark the grid. The one who marks a",b2x + b2w/2 - ctx.measureText("mark the grid. The one who marks a").width/2, 180);
		ctx.fillText("whole row, column or diagonal of three wins",b2x + b2w/2 - ctx.measureText("whole row, column or diagonal of three wins").width/2, 210);
		
		ctx.fillStyle='red';
		ctx.fillRect(b2x, b2y, b2w, b2h);
		ctx.font="22px Arial";
		ctx.fillStyle='White';
		ctx.fillText("Start Game",b2x + b2w/2 - ctx.measureText("Start Game").width/2, b2y+75/2);
			
			
		}
		//Draw screen
		else if(screen == 5){
		ctx.drawImage(Bendtner, w/2 - 140, 60, 280, h/2 - 20);	
		ctx.drawImage(Frame, w/2 - 150, 50, 300, h/2 );		
		ctx.fillStyle='black';
		ctx.font="30px Arial";
		ctx.fillText("Cat's game!",b2x + b2w/2 - ctx.measureText("Cat's game!").width/2, b2y+75/2);	
		ctx.fillStyle='#04B404';						
		ctx.fillRect(b3x, b3y, b3w, b3h);
		ctx.fillStyle='black';
		ctx.fillText("Play Again!",b3x + b3w/2 - ctx.measureText("Play Again!").width/2, b3y+75/2);
		
		}
		
		
		//When hovering over start game button
		if((mx > b1x && mx < b1xend) && (my > b1y && my < b1yend) && screen == 0) {
		ctx.fillStyle='#FF9500';
		ctx.fillRect(192, 225, 20, 65);
		ctx.fillRect(192, 225, 256, 20);
		ctx.fillRect(192, 270, 256, 20);
		ctx.fillRect(428, 225, 20, 65);
		}
		//When hovering Instructions button
		if((mx > b2x && mx < b2xend) && (my > b2y && my < b2yend) && screen == 0) {
		ctx.fillStyle='#B80000';
		ctx.fillRect(192, 305, 20, 65);
		ctx.fillRect(192, 305, 256, 20);
		ctx.fillRect(192, 350, 256, 20);
		ctx.fillRect(428, 305, 20, 65);
		}
		
		//When hovering Assignment button
		if((mx > b3x && mx < b3xend) && (my > b3y && my < b3yend) && screen == 0) {
		ctx.fillStyle='#049404';
		ctx.fillRect(192, 385, 20, 65);
		ctx.fillRect(192, 385, 256, 20);
		ctx.fillRect(192, 430, 256, 20);
		ctx.fillRect(428, 385, 20, 65);
		}
		
		
		//}
		
		
		
		/*
		if(condition){
			//Do something
		}else if(some other condition){
			//Do something else
		}else{ 
			//Do this if no other condition worked so far
		}

		When an if statement block is running, regardless of the number of else if's 
		you use, the if statement will settle on the first condition to evaluate to
		TRUE.  You can combine multiple conditions using 
		&& (and)
		|| (or) 
		! (not)
		== (equals)
		> (greater than)
		>= (greater than or equal to)
		< (less than)
		<= (less than or equal to)

		But more on those later.


		*/

		//ctx.fillText(ctx.font, 10, 80);

		//ctx.font = '30px sans-serif';
			

		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		if(mx < w / 2) {clicker = true;}
		else {clicker = false;}
	    
	if(screen == 0){
	//Menu Screen to Start Game	
		if((mx > b1x && mx < b1xend) && (my > b1y && my < b1yend) && screen == 0) { 
			screen = 1;	
	}
	//Menu Screen to Instructions
		if((mx > b2x && mx < b2xend) && (my > b2y && my < b2yend) && screen == 0) { 
			screen = 4;	
	}
	}
	//Instructions to Game
	else if(screen == 4){
		if((mx > b2x && mx < b2xend) && (my > b2y && my < b2yend) && screen == 4){
		screen = 1;
		}
	}
	
	else if(screen == 2){
		if((mx > backx && mx < backxend) && (my > backy && my < backyend) && screen == 2) { 
		screen = 0;
		}
		if((mx > b3x && mx < b3xend) && (my > b3y && my < b3yend) && screen == 2) { 
		location.reload();
		
	}
	}
	else if(screen == 3){
		if((mx > backx && mx < backxend) && (my > backy && my < backyend) && screen == 3) { 
		screen = 0;
		}
		if((mx > b3x && mx < b3xend) && (my > b3y && my < b3yend) && screen == 3) { 
		location.reload();
		
	}
	}
	else if(screen == 4){
		if((mx > backx && mx < backxend) && (my > backy && my < backyend) && screen == 4) { 
		screen = 0;
	}
	}
	else if(screen == 5){
	if((mx > b3x && mx < b3xend) && (my > b3y && my < b3yend) && screen == 5) { 
		location.reload();
	if((mx > backx && mx < backxend) && (my > backy && my < backyend) && screen == 5) { 
		screen = 0;
	}
	}
	}
	else if(screen == 1){
	
	//Orange button click to bring back to menu screen
		if((mx > backx && mx < backxend) && (my > backy && my < backyend) && screen == 1) { 
		screen = 0;
	}
	
	//Messi head
	//Square 1
	if(mx > 0 && mx < w/3 && my > 0 && my < h/3 && counter == 1 && screen == 1){
		square1 = true;
		}
	//Square 2
	if(mx > w/3 && mx < w/3*2 && my > 0 && my < h/3 && counter == 1 && screen == 1){
		square2 = true;
		}
	//Square 3
	if(mx > w/3*2 && mx < w/3*3 && my > 0 && my < h/3 && counter == 1 && screen == 1){
		square3 = true;
		}
	//Square 4
	if(mx > 0 && mx < w/3 && my > h/3 && my < h/3*2 && counter == 1 && screen == 1){
		square4 = true;
		}	
	//Square 5
	if(mx > w/3 && mx < w/3*2 && my > h/3 && my < h/3*2 && counter == 1 && screen == 1){
		square5 = true;
		}	
	//Square 6
	if(mx > w/3*2 && mx < w/3*3 && my > h/3 && my < h/3*2 && counter == 1 && screen == 1){
		square6 = true;
		}	
	//Square 7
	if(mx > 0 && mx < w/3 && my > h/3*2 && my < h/3*3 && counter == 1 && screen == 1){
		square7 = true;
		}	
	//Square 8
	if(mx > w/3 && mx < w/3*2 && my > h/3*2 && my < h/3*3 && counter == 1 && screen == 1){
		square8 = true;
		}
	//Square 9
	if(mx > w/3*2 && mx < w/3*3 && my > h/3*2 && my < h/3*3 && counter == 1 && screen == 1){
		square9 = true;
		}

	//Ronaldo head
	//Square 1
	if(mx > 0 && mx < w/3 && my > 0 && my < h/3 && counter == 0 && screen == 1){
		box1 = true;
		}
	//Square 2
	if(mx > w/3 && mx < w/3*2 && my > 0 && my < h/3 && counter == 0 && screen == 1){
		box2 = true;
		}
	//Square 3
	if(mx > w/3*2 && mx < w/3*3 && my > 0 && my < h/3 && counter == 0 && screen == 1){
		box3 = true;
		}
	//Square 4
	if(mx > 0 && mx < w/3 && my > h/3 && my < h/3*2 && counter == 0 && screen == 1){
		box4 = true;
		}	
	//Square 5
	if(mx > w/3 && mx < w/3*2 && my > h/3 && my < h/3*2 && counter == 0 && screen == 1){
		box5 = true;
		}	
	//Square 6
	if(mx > w/3*2 && mx < w/3*3 && my > h/3 && my < h/3*2 && counter == 0 && screen == 1){
		box6 = true;
		}	
	//Square 7
	if(mx > 0 && mx < w/3 && my > h/3*2 && my < h/3*3 && counter == 0 && screen == 1){
		box7 = true;
		}	
	//Square 8
	if(mx > w/3 && mx < w/3*2 && my > h/3*2 && my < h/3*3 && counter == 0 && screen == 1){
		box8 = true;
		}
	//Square 9
	if(mx > w/3*2 && mx < w/3*3 && my > h/3*2 && my < h/3*3 && counter == 0 && screen == 1){
		box9 = true;
		}
	}
	//Turn Counter
	if(counter == 1) counter = 0
	else counter = 1
	
	


}, false);
	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		
	}, false);




})