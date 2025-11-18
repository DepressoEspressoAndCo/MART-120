  var x1 = 300;
  var x2 = 300;
  var f = 25;
  //f = forward, y axis
  var s = 200;
  //s = slide, x axis
  var g;
  var o;
  var mousex;
  var mousey;

  
function setup()
    {
        createCanvas(400,600);
        g = Math.floor(Math.random() * (Math.floor(Math.random() * 12)) + 1);
        o = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
    }
  
function draw()
    {
        background(0);
        fill(50,50,50);
        rect(0,0,width,10);
        rect(0,0,10, height);
        rect(0, height-10, width, 10);
        rect(width-10, 0, 10, height-10);
        //borders of the playable area
        fill(24,200,29);
        var x0 = x1 - 60;
        circle(x0,150,50);
        circle (x1, 450, 50);
        fill(255, 128, 0)
        circle (x2, 300, 40);
        //green circles
        fill(250,250,250);
        circle(s, f, 30);
        //player circle
      
      fill(255,255,255);
      textSize(20);
      text("EXIT", width-((width/2)+10), height-10);
      //exit marker
      
      textSize(10)
      text("WASD TO MOVE", 10, 10)
      //minimal movement tutorial
      
      
        if (keyIsDown('68'))
          {
            s += 3;
          }
        if (keyIsDown('65'))
          {
            s -= 3;
          }
        if (keyIsDown('87'))
          {
            f -= 4;
          }
        if (keyIsDown('83'))
          {
            f += 4;
          }
      //player movement
        
        if (f < 25)
        {
          f = 25;
        }
        else if (f > height-20)
        {
          f = height-20;
        }
        else if (s < 25)
        {
          s = 25;
        }
        else if (s > width-25)
        {
          s = width-25;
        }
        
      
         if (f > (height-25) && s > 175 && s < 245)
        {
          textSize(40);
          text("YOU WIN!", 100, 60);
          s = 210;
          f = height-20;
        }
        //winning param
      
      function mouseClicked()
      {
        mousex = mouseX;
        mousey = mouseY;
        fill(255,255,0)
        circle(mousex, mousey, 10);
      }
      
      
      //green circle movement set
        if (x1 >= 350 || x1 <= 25)
        {
          x1 = 25;
        }
        else (x1 >= 25 && x1 < 350)
        {
          x1 += g;
        }
        
       //orange circle movement set
        if (x2>=350 || x2 <= 25)
        {
          x2 = 350;
        }
        else(x2 >= 25 && x2 < 350)
        {
          x2 -= o;
        }
      
    }