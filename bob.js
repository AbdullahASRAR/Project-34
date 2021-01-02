class Bob {
    constructor(x,y,radius){
         var bodyOpt={
         isStatic:false,    
         restitution:1,
         friction:1,
         density:2
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,bodyOpt);
        World.add(world,this.body);
     }
 display(){
  ellipseMode(RADIUS) 
  fill ("pink");
  ellipse(this.body.position.x,this.body.position.y,this.radius)

 }
}
