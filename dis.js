class dis{
    constructor(){
        this.foodstock=20
        this.lastfed=0
        this.image=loadImage("Milk.png")
    }
    updatefoodstock(foodstock){
        this.foodstock=foodstock
    }
    getfedtime(lastfed){
        this.lastfed=lastfed
    }
    deductfood(){
      
        if(this.foodstock>0){
            this.foodstock=this.foodstock-1
        }
    }
    getfoodstock(){
return this.foodstock
    }
    display(){
        var x=80, y=100
        imageMode(CENTER);
        image(this.image,420,220,70,70);
        
        if(this.foodStock!=0){
          for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
              x=80;
              y=y+50;
            }
            image(this.image,x,y,80,80);
            x=x+30;
          }
        }
      }
    
}