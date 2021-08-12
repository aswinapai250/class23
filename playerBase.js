class PlayerBase{
    constructor(x,y,width,height){
   var options = {
       isStatc:true
   }
    
   this.body =Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   this.image = loadImage("./assets/base2.png")
   
   }
   
   display(){
   var pos = this.body.position;
   var angle = this.body.body;
   
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   image(this.image,0,0,this.width,this.height)
   imageMode(CENTER);
  
   pop();
   
   }
   
   
   
   
   
   
   }