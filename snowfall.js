class snowFall{
    constructor(x,y){

        var options={
            restitution : 1.5,
            friction : 1.0,
            density : 0.8
        }

       //this.body = createSprite(x,y,60,40,options);
        this.image = loadImage("snow5.webp")
        this.width = 30;
        this.height = 30;

       // World.add(world,this.body);

    }

    display()
    {
        //var pos = this.body.position;
        
        push()
        //translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(50,50,this.width,this.height);
        imageMode(CENTER);
        image(this.image,50,50,100,100);
        pop()
    }

}