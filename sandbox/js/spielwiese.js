var Spielwiese = {
    wiese   : this,
    games   : [],
    play    : function (){
        jQuery.each(this.games, function(index, value){
            this();
        })
    }
};

Spielwiese.games.push(function(){
    console.log("First game");
});





Spielwiese.games.push(function(){
    console.log("Last game");
});