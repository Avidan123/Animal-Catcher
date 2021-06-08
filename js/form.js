class Form{
constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
}

display(){
this.title.html("ANIMAL CATCHER");
        this.title.position(350, 50);
this.input.position(550,400)
this.button.position(560,500);
this.reset.position(900, 660);


this.button.mousePressed(()=>{
this.button.hide()
this.input.hide()
player.name=this.input.value()
playerCount=playerCount+1
player.index=playerCount
player.update()
player.updateCount(playerCount)
this.greeting.html("helloo "+player.name)
this.greeting.position(400,250)

})
this.reset.mousePressed(()=>{
//player.updateCount(0)

})

}
}