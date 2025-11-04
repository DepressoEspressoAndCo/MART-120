  var gry = 32;
  var sil = 64;
  var blk = 0;
  var br1 = 51;
  var br2 = 25;
  var sk1 = 255;
  var sk2 = 178;
  var sk3 = 102;
  var wyt = 200;
//above var are shorthands to simp fills and make coord numbers pop out better
  
  var y1 = 500;
//for my up and down movements
  var x1 = 70;
  var x2 = 300;
  //side to side time
  var x0 = 120;
  var y0 = 210;
  var xx = 160;
  var yy = 225;
  //diagonal shenanigans cuz I think it funny
  var movement;
  //movement variable
  var size = 50;
  var count = 0;
  var sizeDirection = 2;

function setup() {
  
  createCanvas(350, 500);
  movement = floor(random()* 5)+1;
  //for random movement
}

function draw() {
  background(blk, br1, br2);
  fill(blk, blk, blk)
  triangle(0, y1, 260, 300, 350, y1);
  if(y1 >= 495 || y1 <= 500)
  {
    movement *= -1;
  }
  y1-=movement;
  //making the shoulders dance
  rect(0,495,350,5)
  //main shoulders and additional base to avoid gaps
  fill(br1, br2, blk)
  rect(x1,130, 115, 230);
  triangle(265, 230, 240, 310, x2, 280);
  //hair back
  x1-=movement;
  x2-=movement;
  //hair go side to side brrr
  fill(gry, gry, gry)
  triangle(205, 500, 105, 500, 260, 300);
  //shirt part 1
  fill(sil, sil, sil);
  triangle(75, 400, 175, 340, 105, y1);
  //collar part 1
  fill(sk1,sk2,sk3);
  triangle(160, 390, 175, 180, 260, 300);
  //neck
  fill(gry, gry, gry);
  triangle(105, 500, 160, 370, 260, 300);
  //shirt part 2
  fill(sil, sil, sil)
  triangle(260, 300, 340, 400, 205, y1);
  //collar shall also dance
  //collar part 2
  fill(sk1,sk2,sk3);
  ellipse(175, 230, 180, 200);
  //head
  fill(br1,br2,blk)
  line(120, 280, 125, 290);
  line(130, 280, 135, 290);
  line(140, 285, 145, 290);
  //moustache
  fill(sk1,sk2,sk3);
  triangle(75, 275, 100, 215, 110, 275);
  //nose
  fill(br1, br2, blk);
  triangle(175, 130, 265, 130, 265, 230);
  triangle(175, 200, 175, 130, 265, 230);
  triangle(100, 130, 175, 130, 175, 165);
  //side part
  fill(br2,blk,br1);
  ellipse(150, 235, 40, 20);
  fill (wyt,wyt,wyt);
  ellipse(150, 230, 40, 25);
  fill(blk,br2,br1);
  //eye base
  ellipse(xx,yy, 15, 25);
  //pupil and iris
  xx-=movement;
  yy-=movement;
  //eye twitch go brr
  point(10,225);
  //eye glimmer idk
  fill(sk1,sk2,sk3);
  rect(130, 205, 40, 20);
  //eyelid
  fill(br1, br2, blk);
  rect (x0, y0, 50, 10);
  //eyebrow
  x0-=movement;
  y0-=movement;
  //twitch da brow idk
  fill(blk, blk, blk)
  textSize(size)
  size+= sizeDirection;
  count++;
  if (count > 5)
   {
     sizeDirection *=-1
     count = 0;
   } 
  
  text('Anxiety <3', 25,85);
  
  textSize(20)
  text('Santiago', 15, 425);

}