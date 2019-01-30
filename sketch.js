
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);



}

//  The draw function is called @ 30 fps
function draw() {
   //body
   fill(5, 222, 50);
   ellipse(200, 400, 110, 250);
   // eye
   fill(255,255,255);
   ellipse(200, 350, 30, 30);
   fill(2,2,2);
   ellipse(200, 350, 15, 15);
   fill(255,255,255);
   ellipse(205, 343, 8, 8);
   // mouth
   fill(20,20,200);
   arc(200, 400, 90, 45,  PI, 0 )
   fill(222,20,100);
   arc(200, 400, 40, 15,  PI, 0 )
   
}
