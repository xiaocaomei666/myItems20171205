<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/29
 * Time: 14:57
 */

$data = array(
    "nz"=>array("title"=>"时尚女装","des"=>"貂皮大衣","img"=>"images/1.webp"),
    "bb"=>array("title"=>"品牌箱包","des"=>"国际大牌鳄鱼箱包,最贵的包包最好的宝宝","img"=>"images/2.webp"),
    "xz"=>array("title"=>"男士皮鞋","des"=>"厂长是我表哥","img"=>"images/3.webp")
);

# 获取客户端提交的参数(对应的类型)
$name =  $_REQUEST["name"];

# 把该类型对应的具体数据返回
echo $data[$name]["title"]."|".$data[$name]["des"]."|".$data[$name]["img"];