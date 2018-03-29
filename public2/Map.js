
class Map{
    constructor(size){
        this.size = size;
        this.color = 51
        this.view = createVector(-size/2, -size/2);
        this.target = createVector(0, 0);
        this.offset = createVector(width/2, height/2);
    }

    move(){
        //line(map.target.x + map.offset.x, map.target.y + map.offset.y, this.location.x, this.location.y)
        let d = dist(this.target.x + this.offset.x, this.target.y + this.offset.y, blob.location.x, blob.location.y);
        console.log(d);
        
        if(blob.isonmap()){
            if(mouseX < 30){
                this.offset.x+=5;
            }
            if(mouseX > width-30){
                this.offset.x-=5;
            }
            if(mouseY < 30){
                this.offset.y+=5;
    
            }if(mouseY > height-30){
                this.offset.y-=5;
    
            }
    
            //this.view = p5.Vector.lerp(this.view, this.target, 0.5);
        }
        
        /* console.log(keyCode);
        this.target = this.view;
        if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
            this.target.x+=5;
        }
        if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
            this.target.x-=5;
        }
        if(keyIsDown(UP_ARROW) || keyIsDown(87)){
            this.target.y+=5;
        }
        if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
            this.target.y-=5;
        }
        this.view = p5.Vector.lerp(this.view, this.target, 0.01); */
        
    }

    show(){
        push();
        stroke('black');
        strokeWeight(10);
        fill(this.color, 125);
        translate(this.offset.x - this.size/2, this.offset.y - this.size/2);
        //scale(zoom);
        //rectMode(CENTER);
        
        rect(this.view.x, this.view.y, this.size, this.size);

        line(this.view.x, this.view.y, this.view.x+this.size, this.view.y+this.size );
        line(this.view.x, this.view.y+this.size, this.view.x+this.size, this.view.y );
        
        
        pop();
    }
}