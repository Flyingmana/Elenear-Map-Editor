#!/usr/bin/php
<?php

$count_x = 10;
$count_y = 10;

$types = array(
    1 => "Wiese",
    2 => "Berg",
    3 => "Wasser"
);

$name = 'random '.$count_x.'x'.$count_y;
$map = array();

for ($x=0; $x<$count_x; $x++)
{
    for ($y=0; $y<$count_y; $y++)
    {
        $map[]=array('x'=>$x,'y'=>$y,'typ'=>rand(1,3));
    }
}

if (true)
{
    $con['name'] = $name;
    $con['map'] = $map;
}
else
{
    $con = $map;
}

file_put_contents('../sandbox/maps/'.$name.'.json',json_encode($con));
