function darkbrown()
{
  fill(71, 54, 0);
}

function brown ()
{
  fill(90, 65, 0);
}

function black()
{
  fill(31, 32, 30);
}
//colors  

function pixel(x, y)
{
  rect (x, y, 20, 20);
}
//base pixel build

function dbp(x, y)
{
  darkbrown();
  pixel(x, y);
}

function brp(x, y)
{
  brown();
  pixel(x, y);
}

function blp(x, y)
{
  black();
  pixel(x, y);
}
//combining pixel and color into three concise functions

var x1 = 41;
var x2 = 61;
var x3 = 81;
var x4 = 101;
var x5 = 121;
var x6 = 141;
var x7 = 161;
var x8 = 181;
var x9 = 201;
var x10 = 221;
var x11 = 241;
var x12 = 261;
var x13 = 281;
var x14 = 301;
var x15 = 321;
//rows for the working area on the x coordinate

var y1 = 41;
var y2 = 61;
var y3 = 81;
var y4 = 101;
var y5 = 121;
var y6 = 141;
var y7 = 161;
var y8 = 181;
var y9 = 201;
var y10 = 221;
var y11 = 241;
var y12 = 261;
var y13 = 281;
var y14 = 301;
var y15 = 321;
var y16 = 341;
var y17 = 361;
var y18 = 381;
var y19 = 401;
var y20 = 421;
//columns for the working area on the y coordinate


function slate()
{
  fill(0)
  rect(x1,y1,300,400)
}

function forward1dbp()
{
  dbp(x1,y8);
  dbp(x1,y9);
  dbp(x1,y10);
  dbp(x1,y11);
  dbp(x1,y12);
  dbp(x1,y13);
  
  dbp(x2,y8);
  dbp(x2,y9);
  dbp(x2,y10);
  dbp(x2,y11);
  dbp(x2,y12);
  dbp(x2,y13);
  
  dbp(x3,y7);
  dbp(x3,y8);
  dbp(x3,y9);
  dbp(x3,y10);
  dbp(x3,y11);
  dbp(x3,y12);
  dbp(x3,y13);

  dbp(x4,y7);
  dbp(x4,y8);
  dbp(x4,y9);
  dbp(x4,y16);
  dbp(x4,y17);
  
  dbp(x5,y7);
  dbp(x5,y8);
  dbp(x5,y9);
  dbp(x5,y10);
  dbp(x5,y11);
  dbp(x5,y12);
  dbp(x5,y13);
  dbp(x5,y14);
  dbp(x5,y15);
  dbp(x5,y16);
  dbp(x5,y17);
  
  dbp(x6,y7);
  dbp(x6,y8);
  dbp(x6,y9);
  dbp(x6,y10);
  dbp(x6,y11);
  dbp(x6,y12);
  dbp(x6,y13);
  dbp(x6,y14);
  dbp(x6,y15);
  dbp(x6,y16);
  dbp(x6,y17);
  
  dbp(x7,y7);
  dbp(x7,y8);
  dbp(x7,y9);
  dbp(x7,y10);
  dbp(x7,y11);
  dbp(x7,y12);
  dbp(x7,y13);
  dbp(x7,y14);
  dbp(x7,y15);
  dbp(x7,y16);
  dbp(x7,y17);
  
  dbp(x8,y7);
  dbp(x8,y8);
  dbp(x8,y9);
  dbp(x8,y10);
  dbp(x8,y11);
  dbp(x8,y12);
  dbp(x8,y13);
  dbp(x8,y14);
  
  dbp(x9,y7);
  dbp(x9,y8);
  dbp(x9,y9);
  dbp(x9,y10);
  dbp(x9,y11);
  dbp(x9,y12);
  dbp(x9,y13);
  dbp(x9,y14);
  dbp(x9,y15);
  dbp(x9,y16);
  dbp(x9,y17);
  dbp(x9,y18);
  dbp(x9,y19);
  
  dbp(x10,y7);
  dbp(x10,y8);
  dbp(x10,y9);
  dbp(x10,y10);
  dbp(x10,y11);
  dbp(x10,y12);
  dbp(x10,y13);
  dbp(x10,y14);
  dbp(x10,y15);
  dbp(x10,y16);
  dbp(x10,y17);
  dbp(x10,y18);
  dbp(x10,y19);
  
  dbp(x11,y7);
  dbp(x11,y8);
  dbp(x11,y9);
  dbp(x11,y10);
  dbp(x11,y11);
  dbp(x11,y12);
  dbp(x11,y13);
  dbp(x11,y14);
  dbp(x11,y15);
  dbp(x11,y16);
  dbp(x11,y17);
  dbp(x11,y18);
  dbp(x11,y19);
  
  dbp(x12,y7);
  dbp(x12,y8);
  dbp(x12,y9);
  dbp(x12,y18);
  dbp(x12,y19);
  
  dbp(x13,y7);
  dbp(x13,y8);
  dbp(x13,y9);
  dbp(x13,y10);
  dbp(x13,y11);
  
  dbp(x14,y8);
  dbp(x14,y9);
  dbp(x14,y10);
  dbp(x14,y11);
  
  dbp(x15,y8);
  dbp(x15,y9);
  dbp(x15,y10);
  dbp(x15,y11);
  //dark brown section of forward sprite 1
  
}

function forward2dbp()
{
  dbp(x1,y8);
  dbp(x1,y9);
  dbp(x1,y10);
  dbp(x1,y11);
  
  dbp(x2,y8);
  dbp(x2,y9);
  dbp(x2,y10);
  dbp(x2,y11);
  
  dbp(x3,y7);
  dbp(x3,y8);
  dbp(x3,y9);
  dbp(x3,y10);
  dbp(x3,y11);

  dbp(x4,y7);
  dbp(x4,y8);
  dbp(x4,y9);
  dbp(x4,y18);
  dbp(x4,y19);
  
  dbp(x5,y7);
  dbp(x5,y8);
  dbp(x5,y9);
  dbp(x5,y10);
  dbp(x5,y11);
  dbp(x5,y12);
  dbp(x5,y13);
  dbp(x5,y14);
  dbp(x5,y15);
  dbp(x5,y16);
  dbp(x5,y17);
  dbp(x5,y18);
  dbp(x5,y19);
  
  dbp(x6,y7);
  dbp(x6,y8);
  dbp(x6,y9);
  dbp(x6,y10);
  dbp(x6,y11);
  dbp(x6,y12);
  dbp(x6,y13);
  dbp(x6,y14);
  dbp(x6,y15);
  dbp(x6,y16);
  dbp(x6,y17);
  dbp(x6,y18);
  dbp(x6,y19);
  
  dbp(x7,y7);
  dbp(x7,y8);
  dbp(x7,y9);
  dbp(x7,y10);
  dbp(x7,y11);
  dbp(x7,y12);
  dbp(x7,y13);
  dbp(x7,y14);
  dbp(x7,y15);
  dbp(x7,y16);
  dbp(x7,y17);
  dbp(x7,y18);
  dbp(x7,y19);
  
  dbp(x8,y7);
  dbp(x8,y8);
  dbp(x8,y9);
  dbp(x8,y10);
  dbp(x8,y11);
  dbp(x8,y12);
  dbp(x8,y13);
  dbp(x8,y14);
  
  
  dbp(x9,y7);
  dbp(x9,y8);
  dbp(x9,y9);
  dbp(x9,y10);
  dbp(x9,y11);
  dbp(x9,y12);
  dbp(x9,y13);
  dbp(x9,y14);
  dbp(x9,y15);
  dbp(x9,y16);
  dbp(x9,y17);
  
  dbp(x10,y7);
  dbp(x10,y8);
  dbp(x10,y9);
  dbp(x10,y10);
  dbp(x10,y11);
  dbp(x10,y12);
  dbp(x10,y13);
  dbp(x10,y14);
  dbp(x10,y15);
  dbp(x10,y16);
  dbp(x10,y17);
  
  dbp(x11,y7);
  dbp(x11,y8);
  dbp(x11,y9);
  dbp(x11,y10);
  dbp(x11,y11);
  dbp(x11,y12);
  dbp(x11,y13);
  dbp(x11,y14);
  dbp(x11,y15);
  dbp(x11,y16);
  dbp(x11,y17);
  
  dbp(x12,y7);
  dbp(x12,y8);
  dbp(x12,y9);
  dbp(x12,y16);
  dbp(x12,y17);
  
  dbp(x13,y7);
  dbp(x13,y8);
  dbp(x13,y9);
  dbp(x13,y10);
  dbp(x13,y11);
  dbp(x13,y12);
  dbp(x13,y13);
  
  dbp(x14,y8);
  dbp(x14,y9);
  dbp(x14,y10);
  dbp(x14,y11);
  dbp(x14,y12);
  dbp(x14,y13);
  
  dbp(x15,y8);
  dbp(x15,y9);
  dbp(x15,y10);
  dbp(x15,y11);
  dbp(x15,y12);
  dbp(x15,y13);
  //dark brown section of forward sprite 2
}

function forwardbrp()
{
  brp(x3,y4);
  brp(x3,y5);
  
  brp(x4,y4);
  brp(x4,y5);
  
  brp(x5,y4);
  brp(x5,y5);
  brp(x5,y6);
  brp(x5,y7);
  brp(x5,y8);
  
  brp(x6,y5);
  brp(x6,y6);
  brp(x6,y7);
  brp(x6,y8);
  brp(x6,y9);
  
  brp(x7,y5);
  brp(x7,y6);
  brp(x7,y7);
  brp(x7,y8);
  brp(x7,y9);
  
  brp(x8,y5);
  brp(x8,y6);
  brp(x8,y7);
  brp(x8,y8);
  brp(x8,y9);
  
  brp(x9,y5);
  brp(x9,y6)
  brp(x9,y7);
  brp(x9,y8);
  brp(x9,y9);
  
  brp(x10,y5);
  brp(x10,y6);
  brp(x10,y7);
  brp(x10,y8);
  brp(x10,y9);
  
  brp(x11,y4);
  brp(x11,y5);
  brp(x11,y6);
  brp(x11,y7);
  brp(x11,y8);
  
  brp(x12,y4);
  brp(x12,y5);
  
  brp(x13,y4);
  brp(x13,y5);
  //brown section of forward sprites
}


function forwardblp()
{
  blp(x6,y3);
  blp(x6,y4);
  blp(x6,y6);
  blp(x6,y10);
  blp(x6,y11);
  
  blp(x7,y1);
  blp(x7,y2);
  blp(x7,y3);
  blp(x7,y4);
  blp(x7,y6);
  blp(x7,y10);
  blp(x7,y11);
  
  blp(x8,y1);
  blp(x8,y2);
  blp(x8,y3);
  blp(x8,y4);
  blp(x8,y7);
  blp(x8,y10);
  blp(x8,y13);
  
  blp(x9,y1);
  blp(x9,y2);
  blp(x9,y3);
  blp(x9,y4);
  blp(x9,y6);
  blp(x9,y10);
  blp(x9,y11);
  
  blp(x10,y3);
  blp(x10,y4);
  blp(x10,y6);
  blp(x10,y10);
  blp(x10,y11);
  //black section of forward sprites
}

function leftblp()
{
  blp(x5,y6);
  blp(x5,y10);
  blp(x5,y11);
  
  blp(x6,y3);
  blp(x6,y4);
  blp(x6,y6);
  blp(x6,y10);
  blp(x6,y11);
  
  blp(x7,y1);
  blp(x7,y2);
  blp(x7,y3);
  blp(x7,y4);
  blp(x7,y7);
  blp(x7,y10);
  blp(x7,y13);
  
  blp(x8,y1);
  blp(x8,y2);
  blp(x8,y3);
  blp(x8,y4);
  blp(x8,y6);
  blp(x8,y10);
  blp(x8,y11);
  
  blp(x9,y1);
  blp(x9,y2);
  blp(x9,y3);
  blp(x9,y4);
  blp(x9,y6);
  blp(x9,y10);
  blp(x9,y11);
  
  blp(x10,y3);
  blp(x10,y4);
  //black section of left sprites
}
function rightblp()
{
  blp(x6,y3);
  blp(x6,y4);
  
  blp(x7,y1);
  blp(x7,y2);
  blp(x7,y3);
  blp(x7,y4);
  blp(x7,y6);
  blp(x7,y10);
  blp(x7,y11);
  
  blp(x8,y1);
  blp(x8,y2);
  blp(x8,y3);
  blp(x8,y4);
  blp(x8,y6);
  blp(x8,y10);
  blp(x8,y11);
  
  blp(x9,y1);
  blp(x9,y2);
  blp(x9,y3);
  blp(x9,y4);
  blp(x9,y7);
  blp(x9,y10);
  blp(x9,y13);
  
  blp(x10,y3);
  blp(x10,y4);
  blp(x10,y6);
  blp(x10,y10);
  blp(x10,y11);
  
  blp(x11,y6);
  blp(x11,y10);
  blp(x11,y11);
  //black section of right sprites
}

function left1dbp()
{
  dbp(x4,y16);
  dbp(x4,y17);
  
  dbp(x5,y9);
  dbp(x5,y10);
  dbp(x5,y11);
  dbp(x5,y12);
  dbp(x5,y13);
  dbp(x5,y14);
  dbp(x5,y15);
  dbp(x5,y16);
  dbp(x5,y17);
  
  dbp(x6,y7);
  dbp(x6,y8);
  dbp(x6,y9);
  dbp(x6,y10);
  dbp(x6,y11);
  dbp(x6,y12);
  dbp(x6,y13);
  dbp(x6,y14);
  dbp(x6,y15);
  dbp(x6,y16);
  dbp(x6,y17);
  
  dbp(x7,y7);
  dbp(x7,y8);
  dbp(x7,y9);
  dbp(x7,y10);
  dbp(x7,y11);
  dbp(x7,y12);
  dbp(x7,y13);
  dbp(x7,y14);
  dbp(x7,y15);
  dbp(x7,y16);
  dbp(x7,y17);
  
  dbp(x8,y7);
  dbp(x8,y8);
  dbp(x8,y9);
  dbp(x8,y10);
  dbp(x8,y11);
  dbp(x8,y12);
  dbp(x8,y13);
  dbp(x8,y14);
  dbp(x8,y18);
  dbp(x8,y19);
  
  dbp(x9,y7);
  dbp(x9,y8);
  dbp(x9,y9);
  dbp(x9,y10);
  dbp(x9,y11);
  dbp(x9,y12);
  dbp(x9,y13);
  dbp(x9,y14);
  dbp(x9,y15);
  dbp(x9,y16);
  dbp(x9,y17);
  dbp(x9,y18);
  dbp(x9,y19);
  
  dbp(x10,y7);
  dbp(x10,y8);
  dbp(x10,y9);
  dbp(x10,y10);
  dbp(x10,y11);
  dbp(x10,y12);
  dbp(x10,y13);
  dbp(x10,y14);
  dbp(x10,y15);
  dbp(x10,y16);
  dbp(x10,y17);
  dbp(x10,y18);
  dbp(x10,y19);
  
  dbp(x11,y7);
  dbp(x11,y8);
  dbp(x11,y9);
  dbp(x11,y10);
  dbp(x11,y11);
  dbp(x11,y12);
  dbp(x11,y13);
  dbp(x11,y14);
  dbp(x11,y15);
  dbp(x11,y16);
  dbp(x11,y17);
  dbp(x11,y18);
  dbp(x11,y19);
  
  dbp(x12,y7);
  dbp(x12,y8);
  dbp(x12,y9);
  
  dbp(x13,y7);
  dbp(x13,y8);
  dbp(x13,y9);
  dbp(x13,y10);
  dbp(x13,y11);
  dbp(x13,y12);
  
  dbp(x14,y8);
  dbp(x14,y9);
  dbp(x14,y10);
  dbp(x14,y11);
  dbp(x14,y12);
  
  dbp(x15,y8);
  dbp(x15,y9);
  dbp(x15,y10);
  dbp(x15,y11);
  dbp(x15,y12);
  //dark brown section of left sprite 1
}

function left2dbp()
{
  dbp(x4,y18);
  dbp(x4,y19);
  
  dbp(x5,y9);
  dbp(x5,y10);
  dbp(x5,y11);
  dbp(x5,y12);
  dbp(x5,y13);
  dbp(x5,y14);
  dbp(x5,y15);
  dbp(x5,y16);
  dbp(x5,y17);
  dbp(x5,y18);
  dbp(x5,y19);
  
  dbp(x6,y7);
  dbp(x6,y8);
  dbp(x6,y9);
  dbp(x6,y10);
  dbp(x6,y11);
  dbp(x6,y12);
  dbp(x6,y13);
  dbp(x6,y14);
  dbp(x6,y15);
  dbp(x6,y16);
  dbp(x6,y17);
  dbp(x6,y18);
  dbp(x6,y19);
  
  dbp(x7,y7);
  dbp(x7,y8);
  dbp(x7,y9);
  dbp(x7,y10);
  dbp(x7,y11);
  dbp(x7,y12);
  dbp(x7,y13);
  dbp(x7,y14);
  dbp(x7,y15);
  dbp(x7,y16);
  dbp(x7,y17);
  dbp(x7,y18);
  dbp(x7,y19):
  
  dbp(x8,y7);
  dbp(x8,y8);
  dbp(x8,y9);
  dbp(x8,y10);
  dbp(x8,y11);
  dbp(x8,y12);
  dbp(x8,y13);
  dbp(x8,y14);
  dbp(x8,y16);
  dbp(x8,y17);
  
  dbp(x9,y7);
  dbp(x9,y8);
  dbp(x9,y9);
  dbp(x9,y10);
  dbp(x9,y11);
  dbp(x9,y12);
  dbp(x9,y13);
  dbp(x9,y14);
  dbp(x9,y15);
  dbp(x9,y16);
  dbp(x9,y17);
  
  dbp(x10,y7);
  dbp(x10,y8);
  dbp(x10,y9);
  dbp(x10,y10);
  dbp(x10,y11);
  dbp(x10,y12);
  dbp(x10,y13);
  dbp(x10,y14);
  dbp(x10,y15);
  dbp(x10,y16);
  dbp(x10,y17);
  
  dbp(x11,y7);
  dbp(x11,y8);
  dbp(x11,y9);
  dbp(x11,y10);
  dbp(x11,y11);
  dbp(x11,y12);
  dbp(x11,y13);
  dbp(x11,y14);
  dbp(x11,y15);
  dbp(x11,y16);
  dbp(x11,y17);
  
  dbp(x12,y7);
  dbp(x12,y8);
  dbp(x12,y9);
  
  dbp(x13,y7);
  dbp(x13,y8);
  dbp(x13,y9);
  dbp(x13,y10);
  dbp(x13,y11);
  dbp(x13,y12);
  dbp(x13,y13);
  dbp(x13,y14);
  
  dbp(x14,y8);
  dbp(x14,y9);
  dbp(x14,y10);
  dbp(x14,y11);
  dbp(x14,y12);
  dbp(x14,y13);
  dbp(x14,y14);
  
  dbp(x15,y8);
  dbp(x15,y9);
  dbp(x15,y10);
  dbp(x15,y11);
  dbp(x15,y12);
  dbp(x15,y13);
  dbp(x15,y14);
  //dark brown section of left sprite 2
}



function right1dbp()
{
  dbp(x1,y8);
  dbp(x1,y9);
  dbp(x1,y10);
  dbp(x1,y11);
  dbp(x1,y12);
  
  dbp(x2,y8);
  dbp(x2,y9);
  dbp(x2,y10);
  dbp(x2,y11);
  dbp(x2,y12);
  
  dbp(x3,y7)
  dbp(x3,y8);
  dbp(x3,y9);
  dbp(x3,y10);
  dbp(x3,y11);
  dbp(x3,y12);
  
  dbp(x4,y7);
  dbp(x4,y8);
  dbp(x4,y9);
  
  dbp(x5,y9);
  dbp(x5,y10);
  dbp(x5,y11);
  dbp(x5,y12);
  dbp(x5,y13);
  dbp(x5,y14);
  dbp(x5,y15);
  dbp(x5,y16);
  dbp(x5,y17);
  
  dbp(x6,y7);
  dbp(x6,y8);
  dbp(x6,y9);
  dbp(x6,y10);
  dbp(x6,y11);
  dbp(x6,y12);
  dbp(x6,y13);
  dbp(x6,y14);
  dbp(x6,y15);
  dbp(x6,y16);
  dbp(x6,y17);
  
  dbp(x7,y7);
  dbp(x7,y8);
  dbp(x7,y9);
  dbp(x7,y10);
  dbp(x7,y11);
  dbp(x7,y12);
  dbp(x7,y13);
  dbp(x7,y14);
  dbp(x7,y15);
  dbp(x7,y16);
  dbp(x7,y17);
  
  dbp(x8,y7);
  dbp(x8,y8);
  dbp(x8,y9);
  dbp(x8,y10);
  dbp(x8,y11);
  dbp(x8,y12);
  dbp(x8,y13);
  dbp(x8,y14);
  dbp(x8,y16);
  dbp(x8,y17);
  
  dbp(x9,y7);
  dbp(x9,y8);
  dbp(x9,y9);
  dbp(x9,y10);
  dbp(x9,y11);
  dbp(x9,y12);
  dbp(x9,y13);
  dbp(x9,y14);
  dbp(x9,y15);
  dbp(x9,y16);
  dbp(x9,y17);
  dbp(x9,y18);
  dbp(x9,y19);
  
  dbp(x10,y7);
  dbp(x10,y8);
  dbp(x10,y9);
  dbp(x10,y10);
  dbp(x10,y11);
  dbp(x10,y12);
  dbp(x10,y13);
  dbp(x10,y14);
  dbp(x10,y15);
  dbp(x10,y16);
  dbp(x10,y17);
  dbp(x10,y18);
  dbp(x10,y19);
  
  dbp(x11,y7);
  dbp(x11,y8);
  dbp(x11,y9);
  dbp(x11,y10);
  dbp(x11,y11);
  dbp(x11,y12);
  dbp(x11,y13);
  dbp(x11,y14);
  dbp(x11,y15);
  dbp(x11,y16);
  dbp(x11,y17);
  dbp(x11,y18);
  dbp(x11,y19);
  
  dbp(x12,y18);
  dbp(x12,y19);
  
  //dark brown section of right sprite 1
}

function right2dbp()
{
  dbp(x1,y8);
  dbp(x1,y9);
  dbp(x1,y10);
  dbp(x1,y11);
  dbp(x1,y12);
  dbp(x1,y13);
  dbp(x1,y14);
  
  dbp(x2,y8);
  dbp(x2,y9);
  dbp(x2,y10);
  dbp(x2,y11);
  dbp(x2,y12);
  dbp(x2,y13);
  dbp(x2,y14);
  
  dbp(x3,y7);
  dbp(x3,y8);
  dbp(x3,y9);
  dbp(x3,y10);
  dbp(x3,y11);
  dbp(x3,y12);
  dbp(x3,y13);
  dbp(x3,y14);
  
  dbp(x4,y7);
  dbp(x4,y8);
  dbp(x4,y9);
  
  dbp(x5,y9);
  dbp(x5,y10);
  dbp(x5,y11);
  dbp(x5,y12);
  dbp(x5,y13);
  dbp(x5,y14);
  dbp(x5,y15);
  dbp(x5,y16);
  dbp(x5,y17);
  dbp(x5,y18);
  dbp(x5,y19);
  
  dbp(x6,y7);
  dbp(x6,y8);
  dbp(x6,y9);
  dbp(x6,y10);
  dbp(x6,y11);
  dbp(x6,y12);
  dbp(x6,y13);
  dbp(x6,y14);
  dbp(x6,y15);
  dbp(x6,y16);
  dbp(x6,y17);
  dbp(x6,y18);
  dbp(x6,y19);
  
  dbp(x7,y7);
  dbp(x7,y8);
  dbp(x7,y9);
  dbp(x7,y10);
  dbp(x7,y11);
  dbp(x7,y12);
  dbp(x7,y13);
  dbp(x7,y14);
  dbp(x7,y15);
  dbp(x7,y16);
  dbp(x7,y17);
  dbp(x7,y18);
  dbp(x7,y19);
  
  dbp(x8,y7);
  dbp(x8,y8);
  dbp(x8,y9);
  dbp(x8,y10);
  dbp(x8,y11);
  dbp(x8,y12);
  dbp(x8,y13);
  dbp(x8,y14);
  dbp(x8,y18);
  dbp(x8,y19);
  
  dbp(x9,y7);
  dbp(x9,y8);
  dbp(x9,y9);
  dbp(x9,y10);
  dbp(x9,y11);
  dbp(x9,y12);
  dbp(x9,y13);
  dbp(x9,y14);
  dbp(x9,y15);
  dbp(x9,y16);
  dbp(x9,y17);
  
  dbp(x10,y7);
  dbp(x10,y8);
  dbp(x10,y9);
  dbp(x10,y10);
  dbp(x10,y11);
  dbp(x10,y12);
  dbp(x10,y13);
  dbp(x10,y14);
  dbp(x10,y15);
  dbp(x10,y16);
  dbp(x10,y17);
  
  dbp(x11,y7);
  dbp(x11,y8);
  dbp(x11,y9);
  dbp(x11,y10);
  dbp(x11,y11);
  dbp(x11,y12);
  dbp(x11,y13);
  dbp(x11,y14);
  dbp(x11,y15);
  dbp(x11,y16);
  dbp(x11,y17);
  
  dbp(x12,y16);
  dbp(x12,y17);
  //dark brown section of right sprite 2
}



function left1()
{
  slate();
  left1dbp();
  forwardbrp();
  leftblp();
}

function left2()
{
  slate();
  left2dbp();
  forwardbrp();
  leftblp();
}

function right1()
{
  slate();
  right1dbp();
  forwardbrp();
  rightblp();
  
}

function right2()
{
  slate();
  right2dbp();
  forwardbrp();
  rightblp();
}

function forward1()
{
  slate();
  forward1dbp();
  forwardbrp();
  forwardblp();
  //putting each layer together into forward sprite1
}

function forward2()
{
  slate();
  forward2dbp();
  forwardbrp();
  forwardblp();
  //putting the layers together for forward sprite 2
}

function backward1()
{
  slate();
  forwardblp();
  forwardbrp();
  forward1dbp();
  //reusing layers in reverse for backward sprite 1
}

function backward2()
{
  slate();
  forwardblp();
  forwardbrp();
  forward2dbp();
  //reused layers in reverse for backward sprite 2
}

function fAnim()
{
  forward1();
  forward2();
  forward1();
}

function bAnim()
{
  backward1();
  backward2();
  backward1();
}

function lAnim()
{
  left1();
  left2();
  left1();
}

function rAnim()
{
  right1();
  right2();
  right1();
}

function setup() {
  createCanvas(380, 480);
}

function draw() {
  background(0);
  strokeWeight(0);
  fill(250,250,250);
  setInterval(draw, 2000);
  frameRate(24);
  
  //left1();
  //left2();
  //right1();
  //right2();
  function keyPressed() {
  if (keyCode === 68)
  // d key right
  {
    rAnim();
  } 
  else if (keyCode === 65)
  // a key left
  {
    lAnim();   
  }
  else if (keyCode == 87)
  // w key up
  {
    bAnim();
  }
  else if (keyCode === 83)
  // s key down
  {
     fAnim();
  } }
  
  keyPressed();
  
}