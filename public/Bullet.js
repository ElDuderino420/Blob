class Bullet{
    constructor(x, y, tx, ty){
        this.location = createVector(x, y);
        this.target = createVector(tx, ty);
    }

    move(){
        this.location = p5.Vector.lerp(this.location, this.target, 0.2);
    }

    show(){
        push();
        ellipse(this.location.x, this.location.y, 10);
        pop();
    }
}