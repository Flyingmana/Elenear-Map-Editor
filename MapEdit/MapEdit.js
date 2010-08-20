/*
Feldtypen:
1 Wasser
2 Wiese
3 Berg

nicht 0 benutzen!
*/

// class / jsonobjekt
var MapEdit = {
    mapX : 128, // sollte sich nach dateiname richten (mapname+'_'+mapX+'x'+mapY+'.json')
    mapY : 64,
    mapJson : window.defmap,
    mapFile : "",
    zoom : "20",

    // Karter in id=map rendern
    renderMap : function ( )
    {
        var mapArray = this.mapJson;
        var content = "";
        var href="";
        var onclick="";
        var dump="";
        for (var x in mapArray)
        {
            if (x<this.mapX && x>=0)
                {
                for (var y in mapArray[x])
                {
                    if (y<this.mapY && y>=0)
                    {
                        //href='href="#lot/'+mapArray[i][0]+';'+mapArray[i][1]+'" ';
                        onclick='onclick="MapEdit.changeType('+x+','+y+')" ';
                        content = content+'<a '+href+onclick+'class="t'+mapArray[x][y]+'">a</a>';
                    }
                }
            }
        }
        content = content+'<div class="i1 fixed">Wiese</div>';
        content = content+'<div class="i2 fixed">Berg</div>';
        content = content+'<div class="i3 fixed">Wasser</div>';
        window.document.getElementById("map").innerHTML=content;
    },

    // Funzt nicht
    loadMap : function (mapName )
    {
        var dir = './maps/'+mapName+'.json';

        var req = null;
        req = new XMLHttpRequest();
        if (req) {
            req.open('GET', dir, true);
            req.onreadystatechange = function () {
                switch (req.readyState) {
                case 4:
                    if (req.status != 200) {
                        alert("Fehler:" + req.status);
                    } else {
                        this.mapJson = req.responseText;
                    }
                    break;
                default:
                    break;
                }
            };
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(null);
        }

        this.renderMap();
    },

    // Feldergröße festlegen, entspricht Zoom
    setSize : function (size ) 
    {
        if (size<1) 
            size=1;
        else if (size>128)
            size=128;
        x = this.mapX;
        y = this.mapY;
        this.zoom = size;
        content = '#map{width:'+size*x+'px;height:'+size*y+'px}#map>a{width:'+size+'px;height:'+size+'px}';
        window.document.getElementById("mapcss").innerHTML=content;
    },

    // Feldergrößer ändern, true zoomt in, false zoomt raus
    changeSize : function (zoomin )
    {
        if (zoomin)
            this.setSize(parseInt(this.zoom*2));
        else 
            this.setSize(parseInt(this.zoom/2));
    },

    // Shortcuts 1-7 für setSize, + - für changeSize
    keypress : function (key) 
    {
        if (!key)
            key = window.event;
        var code = key.keyCode;
        switch (code) {
            case 48: MapEdit.setSize(1);break;
            case 49: MapEdit.setSize(2);break;
            case 50: MapEdit.setSize(4);break;
            case 51: MapEdit.setSize(8);break;
            case 52: MapEdit.setSize(16);break;
            case 53: MapEdit.setSize(32);break;
            case 54: MapEdit.setSize(64);break;
            case 55: MapEdit.setSize(128);break;
            case 43: MapEdit.changeSize(true);break;
            case 45: MapEdit.changeSize(false);break;
            default: alert(code);
        }
    },

    // Malen
    draw : 1,
    brushSize : 3,

    changeType : function (x, y ) 
    {
        var m=this.mapJson;
        var d=this.draw;
        var b=this.brushSize;
        for (var i=-b; i<=b; i++)
        {
            for (var j=-b; j<=b; j++)
            {
                var xi=x+i;
                var yj=y+j;
                if (xi<this.mapX && xi>=0 && yj<this.mapY && yj>=0)
                {
                    m[xi][yj]=d;
                }
            }
        }
        this.mapJson=m;
        this.renderMap();
    }

};
