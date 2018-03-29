class Blob{
    constructor(name, x, y, r = 10){
        this.name = name;
        this.location = createVector(x, y);
        this.r = r;
        this.color = 'orangered';
        this.brightness = 0;
    }

    isonmap() {
        return true;
    }

    setposition(){
        this.location = createVector(width/2, height/2);
    }

    move(){
        //console.log(map.view)
        //console.log(this.location)
        let m = createVector(mouseX, mouseY);
        //m.limit(100);
        this.location = p5.Vector.lerp(this.location, m, 0.1);
        
        //console.log(this.location.x*zoom)
        //console.log(map.view)
    }

    show(){
        push();
        stroke(this.color);
        strokeWeight(4);
        fill(this.brightness, 125);
        scale(zoom)
        //translate(width/2, height/2);
        ellipse(this.location.x, this.location.y, this.r * 2);
        line(map.view.x + map.offset.x, map.view.y + map.offset.y, this.location.x, this.location.y);
        pop();
    }

    
}