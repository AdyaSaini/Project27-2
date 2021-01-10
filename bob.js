class bob {
    constructor(x, y) {
        var options= {
            'isStatic' : false,
            'restitution':0.7,
            'friction':0.5,
            'density':2
        }
        this.body = Bodies.circle(x, y, 10, options); 
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        fill('#ff66b8');
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}