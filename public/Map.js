
class Map{
    constructor(x, y){
        this.width = x;
        this.height = y;
        this.color = 0
        this.view = createVector(width/2 - this.width/2, height/2 - this.height/2);
        //this.view = createVector(0, 0);
        this.target = createVector(0, 0);
        this.offset = this.view;
    }

    move(){
        

        
        if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
            //this.view.x+=10;
            this.offset.x+=5;
        }
        if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
            //this.view.x-=10;
            this.offset.x-=5;
        }
        if(keyIsDown(UP_ARROW) || keyIsDown(87)){
            //this.view.y+=10;
            this.offset.y+=5;
        }
        if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
            //this.view.y-=10;
            this.offset.y-=5;
        }

        let m = p5.Vector.sub(createVector(mouseX, mouseY), blob.location);
        m.limit(5);
        
        this.offset.x = constrain(this.offset.x, width/2-this.width, width/2);
        this.offset.y = constrain(this.offset.y, height/2-this.height, height/2);

        this.view = p5.Vector.lerp(this.view, this.offset, 0.1);
        //this.view.sub(m);
        //blob.location.sub(m);
        //this.view.x = constrain()
        
    }

    show(){
        push();
        stroke('black');
        strokeWeight(5);
        fill(this.color, 125);
        //scale(zoom);
        //translate(-this.offset.x, -this.offset.y);
        //translate(-blob.location.x, -blob.location.y);
        //rectMode(CENTER);
        
        rect(this.view.x, this.view.y, this.width, this.height);
        //ellipse(mouseX , mouseY, 20);
        line(this.view.x, this.view.y, this.width + this.view.x, this.height + this.view.y );
        line(this.view.x, this.height + this.view.y,this.width + this.view.x, this.view.y );
        ellipse(this.view.x + blob.location.x - 409, this.view.y + blob.location.y - 184, 50);
        
        pop();
    }
}