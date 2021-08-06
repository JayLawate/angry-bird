class SlingShot{
    constructor(bodyA,bodyB){

    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        atiffness:0.04,
        length:10
    }

        this.sling = constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
       var pointA = this.sling.bodyA.position
       var pointB = this.sling.bodyB.position
       strokeWeight(4)
       line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}