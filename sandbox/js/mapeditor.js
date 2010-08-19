/*
 * Feldtypen;
 * 1 => Wiese
 * 2 => Berg
 * 3 => Wasser
 *
 */

// class / jsonobjekt, klappt bis jetzt nicht so ganz
var MapEdit = {

    mapHeight : 400,
    mapWidth : 400,
    fieldWidth : parseInt(this.mapWidth/25),
    fieldHeight : parseInt(this.mapHeight/25),
    paper : Raphael(document.getElementById("map"), this.mapWidth, this.mapHeight),

    __construct : function ()
    {
        
    },

    loadMap : function () 
    {
        // Feldgrößen neuladen falls geändert
        this.fieldWidth  = parseInt(this.mapWidth/25);
        this.fieldHeight = parseInt(this.mapHeight/25);
        this.paper = Raphael(document.getElementById("map"), this.mapWidth, this.mapHeight);
        // Müll wegbringen
        document.getElementById("map").innerHTML='';
        // ?
        $.get('js/testmap.json',
            {},
            function (data) {
                this.render(data.map);
            },
            'json'
        )
    },

    changeSize : function (width, height ) 
    {
        this.mapHeight=mapHeight+parseInt(width);
        this.mapWidth=mapWidth+parseInt(height);
        this.loadMap();
    },

    setSize : function (width, height ) 
    {
        this.mapHeight=parseInt(width);
        this.mapWidth=parseInt(height);
        loadMap();
    },

    getFieldcolor : function (typ ) 
    {
        switch (typ) {
            case 1:
                return "#A5BF36";
            case 2:
                return "#B7C3C3";
            case 3:
                return "#145678";
            default:
                return "#f00";
        }
    },

    getFieldname : function (typ ) 
    {
        switch (typ) {
            case 1:
                return "Wiese";
            case 2:
                return "Berg";
            case 3:
                return "Wasser";
            default:
                return "Unbekannter Feldtyp";
        }
    },

    render : function (map ) 
    {
        jquery.each(map, function(key, value) {
            paper.rect(
                (value.x-1)*fieldWidth,
                (value.y-1)*fieldHeight,
                fieldWidth,
                fieldHeight
            ).attr(
                {fill: get_fieldcolor(value.typ), title: get_fieldname(value.typ)}
            ).hover(
                function(){
                    jquery("#map_info").html("Feldname: "+ this.attr("title") );
                },function(){

                }
            );
        });
    }

}
