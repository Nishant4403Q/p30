class Block {
  constructor(x,y,w,h){
    Block(x,y,width,height);
    this.visibility=255;
      var options = {

          restitution :0.4,
          friction :0.0,
          //isStatic:true

      }
      
          this.body= Bodies.rectangle(x,y,w,h,options);
          World.add(world,this.body);
          this.w = w;
          this.h = h;
  }
  display(){

      push();
      var angle = this.body.angle;
      var pos= this.body.position;
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.w, this.h);
      pop();
      if(this.body.speed<3){
        block.display();
        
      }
      else{
       World.remove(world,this.body);
       push();
       this.visibility=this.visibility-5;
       tint(175,this.visibility);
    
       image(this.image,this.body.position.x,this.body.position.y,50,50);
       pop();
      }
  }
} 