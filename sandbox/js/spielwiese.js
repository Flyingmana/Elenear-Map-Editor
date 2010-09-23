var Spielwiese = {
    wiese   : this,
    games   : [],
    play    : function(){
        jQuery.each(this.games, function(index, value){
            this();
        })
    },
    newDiv  : function(){
        return jQuery("<div>").appendTo('body');
    }
};

Spielwiese.games.push(function(){
    console.log("First game");
});

Spielwiese.games.push(function(){
    return;
    for (var i = 1; i <= 20000; i++){
        Spielwiese.newDiv();
        if ( i%100== 0) {
            jQuery("<br>").appendTo('body');
        };
    }
});


Spielwiese.games.push(function(){
    var canvas = document.getElementById('canvas_map');
    var ctx = canvas.getContext('2d');

    for (var i = 1; i <= 500000; i++){
        ctx.strokeRect(
            (i%100) * 10,
            Math.round( (i/100) - 0.51) * 10,
            10,
            10);

    }

});




Spielwiese.games.push(function(){
    console.log("Last game");
});