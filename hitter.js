class Hitter{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restituution:0.8,
            friction:0,
            density:1.0
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop(); 
    }
}