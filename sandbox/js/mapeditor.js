/*
 * Feldtypen;
 * 1 => Wiese
 * 2 => Berg
 * 3 => Wasser
 */

// class / jsonobjekt, klappt bis jetzt nicht so ganz
var MapEdit = {
    mapHeight : 400,
    mapWidth : 400,
    fieldWidth : parseInt(this.mapWidth/25, 10),
    fieldHeight : parseInt(this.mapHeight/25, 10),
    paper: null,

    loadMap : function (myvar ) 
    {
        // Feldgrößen neuladen falls geändert
        this.fieldWidth  = parseInt(this.mapWidth/25, 10);
        this.fieldHeight = parseInt(this.mapHeight/25, 10);
        // Müll wegbringen
        window.document.getElementById("map").innerHTML="";
        this.paper = window.Raphael(
            window.document.getElementById("map"), 
            this.mapWidth, 
            this.mapHeight
        );

        var self = this;
        // ?
        window.jQuery.get("js/testmap.json",
            {},
            function (data) {
                self.renderMap(data.map);
            },
            "json"
        );
    },

    changeSize : function (width, height ) 
    {
        this.mapHeight=this.mapHeight+parseInt(width, 10);
        this.mapWidth=this.mapWidth+parseInt(height, 10);
        this.loadMap();
    },

    setSize : function (width, height ) 
    {
        this.mapHeight=parseInt(width, 10);
        this.mapWidth=parseInt(height, 10);
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
        var self = this;

        window.jQuery.each (map, function(key, value) {
            self.paper.rect(
                (value.x-1)*self.fieldWidth,
                (value.y-1)*self.fieldHeight,
                self.fieldWidth,
                self.fieldHeight
            ).attr(
                {
                    fill: self.getFieldcolor(value.typ), 
                    title: self.getFieldname(value.typ)
                }
            ).hover(
                function () {
                    window.jQuery(
                        "#map_info").html("Feldname: "+ self.attr("title") 
                    );
                }, function () {

                }
            );
        });
    }

};

