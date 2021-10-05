class Form{
    constructor(){
        
    }
    display(){
        //DOM code
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(600,0);
        //create input and button
        var input=createInput("NAME")
        var button=createButton("PLAY")
        button.position(600,200);
        input.position(500,160)
       
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value();
            var greeting=createElement('h3')
            greeting.html("Hello"+name)
            greeting.position(500,160)
        });



    }
}