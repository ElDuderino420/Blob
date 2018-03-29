class Blob{
    constructor(name, x, y, r = 10){
        this.name = name;
        this.location = createVector(x, y);
        this.target = createVector(width/2, height/2);
        this.r = r;
        this.color = 'orangered';
        this.brightness = 0;
    }


    move(){
        
        this.location = p5.Vector.lerp(this.location, this.target, 0.1);
        
        let x = constrain(this.location.x, map.view.x, map.width + map.view.x);
        x = constrain(x, 0, width);
        let y = constrain(this.location.y, map.view.y, map.height + map.view.y);
        y = constrain(y, 0, height);
        //let y = constrain(this.location.y, -map.offset.y, map.height - map.offset.y);
        let m = createVector(x, y);

        
        //m.limit(100);
        //this.location = p5.Vector.lerp(this.location, m, 0.1);
        this.location = m
        
        
        
        
        //console.log(this.location.x*zoom)
        //console.log(map.view)
    }

    show(){
        push();
        stroke(this.color);
        strokeWeight(4);
        fill(this.brightness, 125);
        //scale(zoom);
        //translate(map.width/2-map.offset.x, map.height/2-map.offset.y);
        //translate(width/2, height/2);
        ellipse(this.location.x, this.location.y, this.r * 2);
        //line(map.view.x + map.offset.x, map.view.y + map.offset.y, this.location.x, this.location.y);
        pop();
    }

    
}