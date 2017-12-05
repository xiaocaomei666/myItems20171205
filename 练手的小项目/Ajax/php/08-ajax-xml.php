<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/29
 * Time: 14:57
 */

header("Content-Type: text/xml; charset=utf-8");

# 01 获取XML数据
$xmlData = file_get_contents("xmlData.xml");

# 02 直接返回
echo $xmlData;