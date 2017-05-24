创建对象Object：
1
var person = new Object();
person.name="Nike";
person.age=23;

2.对象字面量
var person = {
	name:"Nike",
	age:23
}
//直接添加属性
$("#main").append(person.name)
//向对象里增加属性(1)
person["city"]="Hangzhou";
person["email"]="21514064@zju.edu.cn"

$("#main").append(person["city"]);

//向对象里增加属性(2)
person.city="Hangzhou";
person.email="21514064@zju.edu.cn"

$("#main").append(person.city);

3
var person = {};
person.name="Nike";
person.age=23;

访问对象属性
alert(person.name);
alert(person["name"]);适合属性名中含空格、非字母非数字时的情况

 4 jquery append replace
 $("#main").append("holt");
 var awesomeThoughts=
 	"My name is Holt and I am AWESOME!";
 var funThoughts=awesomeThoughts.replace("AWESOME","FUN")
 $("#main").append(funThoughts);

 使用字符串方法，将 "audacity" 转换为 "Udacity"。

 5 JSON: JavaScript Object Notation
6 对象里有数组
var work={
	"jobs":[
		{"employer":"Getui",
		"title":"Web Developer",
		"location":"Hangzhou",
		"dates":"2016.07",
		"description":"Mapreduce"
},
{
"employer":"Getui",
		"title":"Web Developer",
		"location":"Liaoning",
		"dates":"2016.07",
		"description":"Mapreduce"
}]
};
7 for for in 便利数组或对象
country是迭代器 取任何名字都可以，是country里的索引
var countries =["germany","argentina","brazil","netherlands"];
for(country in countries){
	console.log(countries[country])
};
for(country in countries){
	console.log(country)
};

8 函数 类似于汽车打火
var fun=function(a,b){
	操作集合;
}

function fun(a,b){
	操作集合;
}
不加参数 形参 实参
9 return 

var hello=console.log("hello");
hello
undefined
会打印hello，但是不会给变量返回任何值

var myString="This is my favorite string!"
undefined
var myArray = myString.split(" ")
myArray
会返回值


geohash 精读问题 四等分 转坐标 好处是啥
处理的数据少，速度快，没必要精读太高，

不太懂 ("#workExperience").append(HTMLworkStart) 为啥加这个
.push

