#!/usr/bin/php
<?php

$count_x = 100;
$count_y = 100;

$types = array(
    1 => "Wiese",
    2 => "Berg",
    3 => "Wasser"
);

$name = 'rand '.$count_x.'x'.$count_y;
$map = array();

for ($x=0; $x<$count_x; $x++)
{
    for ($y=0; $y<$count_y; $y++)
    {
        $map[]=array($x,$y,rand(1,3));
    }
}

file_put_contents('../sandbox/maps/'.$name.'.json',json_encode($map));
