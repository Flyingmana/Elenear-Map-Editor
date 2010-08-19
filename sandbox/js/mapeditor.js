/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function render_testmap($map){

    var get_fieldcolor = function(typ){
        /*
         * 1 => Wiese
         * 2 => Berg
         * 3 => Wasser
         *
         */
        switch (typ) {
            case 1:
                return "green";
            case 2:
                return "gray";
            case 3:
                return "blue";
            default:
                return "";
        }

    }
    var get_fieldname = function(typ){
        /*
         * 1 => Wiese
         * 2 => Berg
         * 3 => Wasser
         *
         */
        switch (typ) {
            case 1:
                return "Wiese";
            case 2:
                return "Berg";
            case 3:
                return "Wasser";
            default:
                return "Der Ort der niemals war";
        }

    }


    var paper = Raphael(document.getElementById("map"), 600, 600);
    //var paper = Raphael(10, 10, 320, 200);
    var f_width  = 20;
    var f_height = 20;

    $.each($map, function(key, value){
        paper.rect(
            value.x*f_width,
            value.y*f_height,
            f_width,
            f_height
        ).attr(
            {fill: get_fieldcolor(value.typ), title: get_fieldname(value.typ)}
        ).hover(
            function(){
                $("#map_info").html("Feldname: "+ this.attr("title") );
            },function(){

            }
        );
    });

//    paper.rect(10, 10, f_width, f_height).attr({fill: "green"});
//    paper.rect(30, 10, f_width, f_height);
//    paper.rect(10, 30, f_width, f_height);
//    paper.rect(30, 30, f_width, f_height);
}