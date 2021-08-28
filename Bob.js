class Bob{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0,
            density : 0.8
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        //this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill("white");
        ellipse(0,0,this.r,this.r);
        
        pop();
    }
}