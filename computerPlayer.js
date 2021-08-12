class computerplayer{
    constructor(x,y,width,height){
   var options = {
       isStatc:true
   }
    
   this.body =Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   this.image = loadImage("./assets/player.png")
   
   }
   
   display(){
   var pos = this.body.position;
   var angle = this.body.body;
   
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height)
   pop();
   
   }
   
   
   
   
   
   
   }