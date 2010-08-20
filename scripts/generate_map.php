#!/usr/bin/php
<?php

    $count_x = 25;
    $count_y = 25;

    $types = array(
        1 => "Wiese",
        2 => "Berg",
        3 => "Wasser"
    );

    $data = new stdClass();
    $data->name = "flyingmana";
    $data->map = array();
    for($x = 1; $x<=$count_x; $x++){
        for($y = 1; $y<=$count_y; $y++){
            $field = new stdClass();
            $field->x = $x;
            $field->y = $y;
            $field->typ = rand(1,3);
            $data->map[] = $field;
        }
    };

    echo json_encode($data);

?>