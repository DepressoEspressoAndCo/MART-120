  var x1 = 300;
  var x2 = 300;
  var f = 25;
  //f = forward, y axis
  var s = 200;
  //s = slide, x axis
  var g;
  var o;
  
  function bordersCreate()
      {
        fill(50,50,50);
        rect(0,0,width,10);
        rect(0,0,10, height);
        rect(0, height-10, width, 10);
        rect(width-10, 0, 10, height-10);
        //borders of the playable area
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
        //player movement border
      }
      
      function playerMove()
      {
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
        if (keyIsDown('32'))
          {
            f = 25;
            s = 200;
          }
      //player movement
      }
      
      function playerCreate()
      {
        fill(250,250,250);
        circle(s, f, 30);
        //player circle
      }
      
      function greenCreate()
      {
        fill(24,200,29);
        circle(x1,heights[0],50);
        circle(x1,heights[1],50);
        circle(x1,heights[2],50);
        circle(x1,heights[3],50);
        //green circles
      }
        
      function orangeCreate() 
      {
        fill(255, 128, 0);
        circle (x2, talls[0], 40);
        circle (x2, talls[1], 40);
      //orange circles
      }

      function exitCreate()
      {
        fill(255,255,255);
        textSize(20);
        text("EXIT", width-((width/2)+10), height-10);
        //exit marker
      }

      function greenMove()
      {
        //green circle movement set
        if (x1 >= 350 || x1 <= 25)
        {
          x1 = 25;
        }
        else (x1 >= 25 && x1 < 350)
        {
          x1 += g;
        }
      }

      function orangeMove()
      {
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

      function moveTutorial()
      {   
        textSize(10)
        text("WASD TO MOVE", 10, 10)
        //minimal movement tutorial
      }
      
      function mouseClicked()
      {
        fill(255,255,0);
        let mx = Math.floor((Math.random() *380)+ 20);
        let my = Math.floor((Math.random() *580)+ 20);
        circle(mx, my, 20);
      }

      function winParam()
      {
        
         if (f > (height-25) && s > 175 && s < 245)
        {
          textSize(40);
          text("YOU WIN!", 100, 60);
          textSize(10);
          text("PRESS 'SPACE' TO PLAY AGAIN", 120, 75);
          s = 210;
          f = height-20;
        }
        //winning params
      }
  
    let heights = [100,225,350,475];
    let talls = [300,400];
    //array attempt idk

function setup()
    {
        createCanvas(400,600);
        g = Math.floor(Math.random() * (Math.floor(Math.random() * 12)) + 1);
        o = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
        h = Math.floor((Math.random() * 500) + 100); 
    }
  
function draw()
    {
        background(0);
        bordersCreate();
        greenCreate();
        orangeCreate();
        playerCreate();
        playerMove();
        exitCreate();
        moveTutorial();
        greenMove();
        orangeMove();
        winParam();
    }