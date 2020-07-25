class Ball{
    constructor(x,y){
        this.color = color(random(20,255),random(20,255),random(20,255));
        var options ={
            isStaitc: false,
            restitution: 0.4,
            density:1.4
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}

