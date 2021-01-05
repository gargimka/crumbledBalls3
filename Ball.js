class Ball{
        constructor(x,y,width,height){
            var options={
                restitution :1.0,
                density:1.0,
                friction :1.0
               }
               this.image=loadImage("crumpled paper.png");
        this.width=width;
        this.height=height;   
               this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
            }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
    
        push();
        translate(pos.x,pos.y)
        
        imageMode(CENTER)
        fill("yellow");
        stroke("red");
        strokeWeight(5);
        image(this.image,0,0,50,50);
        pop();
    
    }
    
    }
