/*
 * Feldtypen;
 * 1 => Wiese
 * 2 => Berg
 * 3 => Wasser
 *
 */

// class / jsonobjekt, klappt bis jetzt nicht so ganz
MapEdit = {
    mapHeight : 400,
    mapWidth : 400,
    fieldWidth : parseInt(this.mapWidth/25,10),
    fieldHeight : parseInt(this.mapHeight/25,10),
    jquery : null,
//    paper : Raphael(
//        document.getElementById("map"), this.mapWidth, this.mapHeight
//    ),

    __construct : function (jquery)
    {
        this.jquery = jquery;
    },

    loadMap : function (myvar ) 
    {
        // Feldgrößen neuladen falls geändert
        this.fieldWidth  = parseInt(this.mapWidth/25,10);
        this.fieldHeight = parseInt(this.mapHeight/25,10);
        this.paper = Raphael(document.getElementById("map"), this.mapWidth, this.mapHeight);
        // Müll wegbringen
        document.getElementById("map").innerHTML='';
        // ?
        this.jquery.get('js/testmap.json',
            {},
            function (data) {
                this.renderMap(data.map);
            },
            'json'
        );
    },

    changeSize : function (width, height ) 
    {
        this.mapHeight=this.mapHeight+parseInt(width,10);
        this.mapWidth=this.mapWidth+parseInt(height,10);
        this.loadMap();
    },

    setSize : function (width, height ) 
    {
        this.mapHeight=parseInt(width,10);
        this.mapWidth=parseInt(height,10);
        this.loadMap();
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

    renderMap : function (map ) 
    {
        this.jquery.each(map, function(key, value) {
            this.paper.rect(
                (value.x-1)*this.fieldWidth,
                (value.y-1)*this.fieldHeight,
                this.fieldWidth,
                this.fieldHeight
            ).attr(
                {fill: this.getFieldcolor(value.typ), title: this.getFieldname(value.typ)}
            ).hover(
                function(){
                    this.jquery("#map_info").html("Feldname: "+ this.attr("title") );
                },function(){

                }
            );
        });
    }

};

MapEdit.__construct($);
