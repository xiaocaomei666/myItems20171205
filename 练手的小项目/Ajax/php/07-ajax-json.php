<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/29
 * Time: 14:57
 */

header("Content-Type: text/json; charset=utf-8");

# echo "___";
# 01 先加载获取json数据
$jsonData = file_get_contents("jsonData.json");

#02 获取用户提交的参数
$name = $_REQUEST["name"];  //nz bb xz

#03 根据参数筛选JSON数据,返回对应的那一块数据即可
# 思考:$jsonData本身是JSON数据(有格式的字符串)
# echo $jsonData[$name];

# 0301 ===> 把JSON字符串转换为对象   JSON ==> PHP对象(反序列化处理)
$dataObj = json_decode($jsonData,true);
# echo $dataObj;

# 0302 ===> 根据参数获取对应的数据
$dataItem =$dataObj[$name];

# 04 把处理完毕后的PHP对象转换为JSON返回   对象 ==> JSON(序列化处理)
echo  json_encode($dataItem);
