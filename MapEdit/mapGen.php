#!/usr/bin/php
<?php
function mapGen () {
    $w = array(16,32,64,128,256,16,32,64,128,256);
    $h = array(8,16,32,64,128,16,32,64,128,256);
    $proz = array(0.4,0.5); // letzter Wert ergibt sich

    foreach ($w as $k => $v)
    {
        $name = 'rand_'.$w[$k].'x'.$h[$k];
        $xd = array();
        for ($x=0; $x<$w[$k]; $x++)
        {
            $yd=array();
            for ($y=0; $y<$h[$k]; $y++)
            {
                $rand=rand(0,10000)/10000;
                if ($rand<=$proz[0]) 
                    $typ=1;
                else if ($rand<=$proz[0]+$proz[1]) 
                    $typ=2;
                else
                    $typ=3;
                $yd[]=$typ;
            }
            $xd[]=$yd;
        }
        $map=str_replace("],[","],\n[",json_encode($xd));
        file_put_contents('./maps/'.$name.'.json',$map);
        if ($name == 'rand_128x64')
        file_put_contents('./maps/default.js','var defmap='.$map);
    }
}
mapGen();
