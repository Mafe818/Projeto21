class Ground {
    constructor(x,y,w,h){
        var plane_options = {isStatic:true}
        this.body =  Bodies.rectangle(x, y, w, h, plane_options);
        World.add(world, this.body);
        this.h = h;
        this.w = w;
    }
    display(){
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}