<?php

    $count_x = 25;
    $count_y = 25;

    $types = array(
        1 => "Wiese",
        2 => "Berg",
        3 => "Wasser"
    );

    echo '{
    "name": "flyingmana",
    "map": [
        ';
    for($x = 1; $x<=$count_x; $x++){
        for($y = 1; $y<=$count_y; $y++){
            echo "\t\t{ \"x\":$x, \"y\":$y, \"typ\": ".rand(1,3)." },".PHP_EOL;// @todo letztes komma muss per hand entfernt werden
        }
    };
    echo '    ]
}'.PHP_EOL;

?>