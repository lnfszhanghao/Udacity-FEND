/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName=HTMLheaderName.replace("%data%","Zhang Hao");
$("#header").prepend(formattedName);
 var role="Web Developer";
 var formattedRole=HTMLheaderRole.replace("%data%",role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 var bio={
 	"name":"Zhang Hao",
 	"role":"Web Developer",
 	"contact":{
 		"github":"lnfszhanghao",
 		"email":"21514064@zju.edu.cn",
 		"location":"Hangzhou",
 		"twitter":"@holt_forest"
 	},
 	"skills":[
 		"awesomeness","html","css","javascript"
 	],
 	"picture":"images/fry.jpg"
 }

var work={};
work.position="Web Developer";
work.employer="Getui";
work.years=0.5;

var education={};
education["name"]="ZJU";
education["attended years"]=2015;
education["city"]="Hangzhou";

var education={
	"schools":[
	{
		"names":"ZJU",
		"cities":"Hangzhou",
		"major":["environmental engineering"],
		"graduation years":2018
	}]
	"online course":[
	{
		"name":"Udacity"
	}
	]
};

$("#main").append(work["position"]);
$("#main").append(education.name);


 $("#header").append(bio.picture);

 return练习
 function locationizer(work_obj) {
    var location=[];
for(var i=0;i<work_obj["jobs"].length;i++){
 location.push(work_obj["jobs"][i]["location"]);
}
console.log(location);
}